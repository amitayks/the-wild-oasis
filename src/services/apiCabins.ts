import supabase, { supabaseUrl, Database } from "./supabase";

// Cabin types
export type Cabin = Database['public']['Tables']['cabins']['Row'];
export type CabinInsert = Database['public']['Tables']['cabins']['Insert'];
export type CabinUpdate = Database['public']['Tables']['cabins']['Update'];

export interface CabinFormData {
	id?: number;
	name: string;
	maxCapacity: number;
	regularPrice: number;
	discount?: number;
	image: string | File;
	description: string;
}

export async function getCabins(): Promise<Cabin[]> {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		throw new Error("cabins coud't load");
	}

	return data;
}

export async function addEditCabin({ id, ...cabinInfo }: CabinFormData): Promise<Cabin> {
	// const id = cabinInfo.id || null;
	const hasImagePath = typeof cabinInfo.image === 'string' && cabinInfo.image.startsWith(supabaseUrl);

	const imageName =
		`${`${Math.random()}`.slice(-5)}-${cabinInfo.image instanceof File ? cabinInfo.image.name : 'image'}`.replace(
			"/",
			"",
		);

	const imagePath = hasImagePath
		? cabinInfo.image as string
		: `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

	const cabinData: CabinInsert = {
		...cabinInfo,
		image: imagePath,
		...(id && { id }), // Include id only if it exists for updates
	};

	const { data, error } = await supabase
		.from("cabins")
		.upsert(cabinData, {
			onConflict: "id",
			ignoreDuplicates: false,
		})
		.select()
		.single();

	if (error) {
		console.error(error);
		throw new Error("Couldn't save cabin");
	}

	if (!hasImagePath && cabinInfo.image instanceof File) {
		const { error: fileError } = await supabase.storage
			.from("cabin-images")
			.upload(imageName, cabinInfo.image);

		if (fileError) {
			await supabase.from("cabins").delete().eq("id", data.id);

			throw new Error("Image couldn't upload and the cabin wasn't created");
		}
	}

	return data;
}

export async function deleteCabin(id: number): Promise<null> {
	const { data, error } = await supabase.from("cabins").delete().eq("id", id);

	if (error) {
		if (error.code === "23503") {
			throw new Error("Cannot delete cabin with existing bookings. Please cancel or move all bookings first.");
		}
		throw new Error(error.message || "Cabin couldn't be deleted");
	}

	return data;
}
