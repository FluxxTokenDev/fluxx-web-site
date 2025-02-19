import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";
import { RichTextEditor } from "@/components/ui/rich-text-editor";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featured_image: string;
  published_at: string | null;
};

export default function BlogManager() {
  const { user } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading posts:", error);
      return;
    }

    setPosts(data || []);
  };

  const handleCreate = () => {
    setSelectedPost({
      id: "",
      title: "",
      slug: "",
      content: "",
      excerpt: "",
      featured_image: "",
      published_at: null,
    });
    setIsCreating(true);
  };

  const handleSave = async () => {
    if (!selectedPost) return;

    try {
      if (isCreating) {
        const { error } = await supabase.from("blog_posts").insert({
          ...selectedPost,
          author_id: user?.id,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .update(selectedPost)
          .eq("id", selectedPost.id);
        if (error) throw error;
      }

      await loadPosts();
      setSelectedPost(null);
      setIsCreating(false);
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;
      await loadPosts();
      if (selectedPost?.id === id) {
        setSelectedPost(null);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blog Manager</h1>
        <Button onClick={handleCreate}>New Post</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 col-span-1">
          <h3 className="font-semibold mb-4">Posts</h3>
          <div className="space-y-2">
            {posts.map((post) => (
              <Button
                key={post.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setSelectedPost(post);
                  setIsCreating(false);
                }}
              >
                <div className="text-left">
                  <div className="font-medium">{post.title}</div>
                  <div className="text-sm text-gray-500">
                    {post.published_at
                      ? format(new Date(post.published_at), "MMM d, yyyy")
                      : "Draft"}
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </Card>

        {selectedPost && (
          <Card className="p-6 col-span-2">
            <h3 className="font-semibold mb-4">
              {isCreating ? "Create Post" : "Edit Post"}
            </h3>
            <div className="space-y-4">
              <div>
                <Label>Title</Label>
                <Input
                  value={selectedPost.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    setSelectedPost({
                      ...selectedPost,
                      title,
                      slug: generateSlug(title),
                    });
                  }}
                />
              </div>

              <div>
                <Label>Slug</Label>
                <Input
                  value={selectedPost.slug}
                  onChange={(e) =>
                    setSelectedPost({
                      ...selectedPost,
                      slug: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label>Featured Image URL</Label>
                <Input
                  value={selectedPost.featured_image}
                  onChange={(e) =>
                    setSelectedPost({
                      ...selectedPost,
                      featured_image: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <Label>Excerpt</Label>
                <Textarea
                  value={selectedPost.excerpt}
                  onChange={(e) =>
                    setSelectedPost({
                      ...selectedPost,
                      excerpt: e.target.value,
                    })
                  }
                  rows={3}
                />
              </div>

              <div>
                <Label>Content</Label>
                <RichTextEditor
                  content={selectedPost.content}
                  onChange={(content) =>
                    setSelectedPost({
                      ...selectedPost,
                      content,
                    })
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  checked={!!selectedPost.published_at}
                  onCheckedChange={(checked) =>
                    setSelectedPost({
                      ...selectedPost,
                      published_at: checked ? new Date().toISOString() : null,
                    })
                  }
                />
                <Label>Published</Label>
              </div>

              <div className="flex space-x-4">
                <Button onClick={handleSave}>Save Changes</Button>
                {!isCreating && (
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(selectedPost.id)}
                  >
                    Delete Post
                  </Button>
                )}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
