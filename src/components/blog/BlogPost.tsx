import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";

type BlogPost = {
  id: string;
  title: string;
  content: string;
  featured_image: string;
  published_at: string;
  author: {
    full_name: string;
  };
};

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(
          `
          id,
          title,
          content,
          featured_image,
          published_at,
          author:author_id(full_name)
        `,
        )
        .eq("slug", slug)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error("Error loading post:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse space-y-8">
          <div className="h-96 bg-gray-800 rounded-2xl" />
          <div className="h-8 bg-gray-800 rounded w-3/4" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-800 rounded w-full" />
            <div className="h-4 bg-gray-800 rounded w-5/6" />
            <div className="h-4 bg-gray-800 rounded w-4/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl text-white">Post not found</h1>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <div className="aspect-[21/9] relative mb-12 rounded-2xl overflow-hidden">
          <img
            src={
              post.featured_image ||
              "https://images.unsplash.com/photo-1519681393784-d120267933ba"
            }
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          {post.title}
        </h1>

        <div className="flex items-center space-x-4 text-gray-400 mb-12">
          <span>{post.author?.full_name}</span>
          <span>•</span>
          <span>{format(new Date(post.published_at), "MMMM d, yyyy")}</span>
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </motion.article>
  );
};

export default BlogPost;
