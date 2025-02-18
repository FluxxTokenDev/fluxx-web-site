export type UserRole = "super_admin" | "admin" | "editor";

export type UserProfile = {
  id: string;
  role: UserRole;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};

export type Permission =
  | "manage_users"
  | "manage_site_settings"
  | "manage_content"
  | "publish_content";
