import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    throw new Error("cabins coud't load");
  }

  return data;
}

export async function addEditCabin(cabinInfo, id) {
  const hasImagePath = cabinInfo.image?.startsWith?.(supabaseUrl);

  const imageName = `${`${Math.random()}`.slice(-5)}-${
    cabinInfo?.image?.name
  }`.replace("/", "");

  const imagePath = hasImagePath
    ? cabinInfo.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from("cabins");

  if (!id) {
    query = query
      .insert([
        {
          ...cabinInfo,
          image: imagePath,
        },
      ])
      .select()
      .single();
  }

  if (id) {
    query = query
      .update({
        ...cabinInfo,
        image: imagePath,
      })
      .eq("id", id)
      .select()
      .single();
  }

  const { data, error } = await query;

  if (error) {
    console.error(query.error);
    throw new Error("coud't insert cabin");
  }

  if (!hasImagePath) {
    const { error: fileError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, cabinInfo.image);

    if (fileError) {
      await supabase.from("cabins").delete().eq("id", cabinInfo.id);

      throw new Error("image coud't upload and the cabin didn't created");
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", id)
    .select();

  if (error) {
    console.error("coud't delete cabin");
    throw new Error("Cabin coud't be deleted");
  }

  return data;
}
