export type SiteSettings = {
  id: string;
  site_name: string;
  site_description: string | null;
  logo_url: string | null;
  primary_color: string;
  secondary_color: string;
  created_at: string;
  updated_at: string;
};

export type ContentSection = {
  id: string;
  name: string;
  slug: string;
  content: Record<string, any>;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type Feature = {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  section: string;
  order_index: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type Media = {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number | null;

  created_at: string;
  updated_at: string;
};
