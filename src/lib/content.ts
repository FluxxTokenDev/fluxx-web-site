import { supabase } from "./supabase";
import { ContentSection, Feature, SiteSettings } from "@/types/schema";

export async function getSiteSettings() {
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .single();

  if (error) throw error;
  return data as SiteSettings;
}

export async function getContentSection(slug: string) {
  const { data, error } = await supabase
    .from("content_sections")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) throw error;
  return data as ContentSection;
}

export async function getFeaturesBySection(section: string) {
  const { data, error } = await supabase
    .from("features")
    .select("*")
    .eq("section", section)
    .eq("is_published", true)
    .order("order_index");

  if (error) throw error;
  return data as Feature[];
}

export async function updateContentSection(
  id: string,
  content: Partial<ContentSection>,
) {
  const { data, error } = await supabase
    .from("content_sections")
    .update(content)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as ContentSection;
}

export async function updateSiteSettings(settings: Partial<SiteSettings>) {
  const { data, error } = await supabase
    .from("site_settings")
    .update(settings)
    .eq("id", settings.id)
    .select()
    .single();

  if (error) throw error;
  return data as SiteSettings;
}
