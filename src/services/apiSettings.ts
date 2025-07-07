import supabase, { Database } from "./supabase";

// Settings types
export type Settings = Database['public']['Tables']['settings']['Row'];
export type SettingsInsert = Database['public']['Tables']['settings']['Insert'];
export type SettingsUpdate = Database['public']['Tables']['settings']['Update'];

export async function getSettings(): Promise<Settings> {
	const { data, error } = await supabase.from("settings").select("*").single();

	if (error) {
		throw new Error("Settings could not be loaded");
	}
	return data;
}

export async function updateSetting(newSetting: SettingsUpdate): Promise<Settings> {
	const { data, error } = await supabase
		.from("settings")
		.update(newSetting)
		.eq("id", 1)
		.single();

	if (error) {
		throw new Error("Settings could not be updated");
	}
	return data;
}
