import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const WhitepaperPage = () => {
  return (
    <motion.div
    className="min-h-screen w-full bg-[#0A0A0A] overflow-x-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    
      <Navbar />
        <main className="pt-20">
            {/* Add padding top to account for fixed navbar */}
            <section className="w-full bg-[#0A0A0A] py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-white mb-8"
                >
                Fluxx Whitepaper
                </motion.h1>
                <motion.p
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="text-gray-400 text-lg md:text-xl"
                            >
                              Learn more about Fluxx's vision, technology, and roadmap by exploring our whitepaper.
                            </motion.p>
            </div>
            </section>
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center py-16 px-4">
      
      <iframe
        src="/FLUXX-FLX-THE-WHITEPAPER.pdf"
        className="w-full max-w-4xl h-[600px] mb-8 border border-gray-700"
        title="Fluxx Whitepaper"
      ></iframe>
      <a
        href="/FLUXX-FLX-THE-WHITEPAPER.pdf"
        download
        className="px-8 py-4 bg-[#FF3B30] text-white font-medium rounded-full hover:bg-opacity-90 transition"
      >
        Download Whitepaper
      </a>
    </div>
    </main>
    <Footer />
    
      {/* Background gradient effects */}
      <div className="fixed top-0 left-[-50%] w-[200%] h-[500px] bg-[#FF3B30]/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-[-50%] w-[200%] h-[500px] bg-[#FF3B30]/5 blur-[120px] pointer-events-none" />
    </motion.div>
  );
};

export default WhitepaperPage;
