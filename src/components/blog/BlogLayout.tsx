import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const BlogLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BlogLayout;
