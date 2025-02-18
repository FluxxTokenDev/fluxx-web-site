import { supabase } from "./supabase";
import { UserProfile, Permission, UserRole } from "@/types/auth";

export async function getCurrentUser() {
  try {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    if (userError || !user) return null;

    // Get session to ensure we have fresh token
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) return null;

    const { data: profile } = await supabase
      .from("user_profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    return { ...user, profile } as const;
  } catch (error) {
    console.error("Error in getCurrentUser:", error);
    return null;
  }
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("id", userId)
    .single();

  if (error) throw error;
  return data as UserProfile;
}

export async function updateUserProfile(
  userId: string,
  profile: Partial<UserProfile>,
) {
  const { data, error } = await supabase
    .from("user_profiles")
    .update(profile)
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;
  return data as UserProfile;
}

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  super_admin: [
    "manage_users",
    "manage_site_settings",
    "manage_content",
    "publish_content",
  ],
  admin: ["manage_site_settings", "manage_content", "publish_content"],
  editor: ["manage_content", "publish_content"],
};

export function hasPermission(
  userRole: UserRole,
  permission: Permission,
): boolean {
  return ROLE_PERMISSIONS[userRole]?.includes(permission) ?? false;
}
