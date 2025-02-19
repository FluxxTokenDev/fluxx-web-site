import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { format } from "date-fns";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  author: {
    full_name: string;
  };
};

const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(
          `
          id,
          title,
          slug,
          excerpt,
          featured_image,
          published_at,
          author:author_id(full_name)
        `,
        )
        .not("published_at", "is", null)
        .order("published_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error loading posts:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="animate-pulse space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-800 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#111111] rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
          >
            <Link to={`/blog/${post.slug}`}>
              <div className="aspect-[16/9] relative">
                <img
                  src={
                    post.featured_image ||
                    "https://images.unsplash.com/photo-1519681393784-d120267933ba"
                  }
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author?.full_name}</span>
                  <span>
                    {format(new Date(post.published_at), "MMM d, yyyy")}
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
