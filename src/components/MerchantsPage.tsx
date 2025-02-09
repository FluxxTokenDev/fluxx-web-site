import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MerchantsPage = () => {
  return (
    <motion.div
      className="min-h-screen w-full bg-[#0A0A0A] overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <main className="pt-20">
        <section className="w-full bg-[#0A0A0A] py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              Fluxx for Merchants
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl mb-12"
            >
              Expand your business globally with Fluxx's merchant solutions
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Global Reach",
                  description:
                    "Access customers from around the world without currency barriers",
                },
                {
                  title: "Easy Integration",
                  description:
                    "Simple API integration with your existing systems",
                },
                {
                  title: "Instant Settlement",
                  description: "Receive payments instantly with minimal fees",
                },
                {
                  title: "Analytics Dashboard",
                  description:
                    "Track your business performance with detailed analytics",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#111111] rounded-[32px] p-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default MerchantsPage;
