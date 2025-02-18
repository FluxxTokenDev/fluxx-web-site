import { supabase } from "./supabase";

export async function uploadFile(
  file: File,
  bucket: "site-media" | "site-logos",
) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
  const filePath = `${bucket}/${fileName}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) throw error;

  // Get public URL
  const {
    data: { publicUrl },
  } = supabase.storage.from(bucket).getPublicUrl(filePath);

  // Create media record
  const { data: mediaRecord, error: mediaError } = await supabase
    .from("media")
    .insert({
      name: file.name,
      url: publicUrl,
      type: file.type,
      size: file.size,
    })
    .select()
    .single();

  if (mediaError) throw mediaError;

  return mediaRecord;
}

export async function deleteFile(url: string) {
  // Extract path from URL
  const path = url.split("/").slice(-2).join("/");
  const bucket = path.split("/")[0] as "site-media" | "site-logos";

  const { error } = await supabase.storage.from(bucket).remove([path]);

  if (error) throw error;

  // Delete media record
  const { error: mediaError } = await supabase
    .from("media")
    .delete()
    .eq("url", url);

  if (mediaError) throw mediaError;
}
