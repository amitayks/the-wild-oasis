import { AuthResponse, User, AuthTokenResponse } from "@supabase/supabase-js";
import supabase, { supabaseUrl } from "./supabase";

// Authentication types
export interface SignupCredentials {
	email: string;
	password: string;
	fullName: string;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface UpdateUserData {
	fullName?: string;
	avatar?: File;
	password?: string;
}

export async function signup({ email, password, fullName }: SignupCredentials): Promise<any> {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			data: {
				fullName,
				avatar: "",
			},
		},
	});
	if (error) throw new Error(error.message);
	return data;
}

export async function login({ email, password }: LoginCredentials): Promise<any> {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});
	if (error) throw new Error(error.message);
	return data;
}

export async function getCurrentUser(): Promise<User | null> {
	const { data: session } = await supabase.auth.getSession();
	if (!session.session) return null;

	const { data, error } = await supabase.auth.getUser();
	if (error) throw new Error(error.message);

	return data?.user || null;
}

export async function logout(): Promise<void> {
	const { error } = await supabase.auth.signOut();
	if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ fullName, avatar, password }: UpdateUserData): Promise<any> {
	let updateData: any;
	if (password) updateData = { password };
	if (fullName) updateData = { data: { fullName } };

	const { data, error } = await supabase.auth.updateUser(updateData);
	if (error) throw new Error(error.message);
	if (!avatar) return data;

	const fileName = `avatar-${data.user.id}-${Date.now()}`;
	const { error: storageError } = await supabase.storage
		.from("avatar")
		.upload(fileName, avatar);
	if (storageError) throw new Error(storageError.message);

	const { data: updatedUser, error: userError } =
		await supabase.auth.updateUser({
			data: {
				avatar: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`,
			},
		});
	if (userError) throw new Error(userError.message);

	return updatedUser;
}
