import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		throw new Error("cabins coud't load");
	}

	return data;
}

export async function addEditCabin({ id, ...cabinInfo }) {
	// const id = cabinInfo.id || null;
	const hasImagePath = cabinInfo.image?.startsWith?.(supabaseUrl);

	const imageName =
		`${`${Math.random()}`.slice(-5)}-${cabinInfo?.image?.name}`.replace(
			"/",
			"",
		);

	const imagePath = hasImagePath
		? cabinInfo.image
		: `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

	const cabinData = {
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

	if (!hasImagePath) {
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

export async function deleteCabin(id) {
	const { data, error } = await supabase.from("cabins").delete().eq("id", id);

	if (error) {
		if (error.code === "23503") {
			throw new Error("Cannot delete cabin with existing bookings. Please cancel or move all bookings first.");
		}
		throw new Error(error.message || "Cabin couldn't be deleted");
	}

	return data;
}
