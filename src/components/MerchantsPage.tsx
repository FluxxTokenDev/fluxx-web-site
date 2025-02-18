import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Globe, Zap, Shield, ShoppingCart } from "lucide-react";
import TokenSection from "./TokenSection";

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
        {/* Hero Section */}
        <section className="w-full bg-[#0A0A0A] py-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
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
              For merchants, integrating Fluxx tokens opens up boundless
              opportunities for consumers and users to purchase products and
              services without limits.
            </motion.p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full bg-[#0A0A0A] py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4 text-center"
            >
              Benefits for Merchants
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-center mb-16"
            >
              Discover how Fluxx can transform your business with our
              comprehensive merchant solutions.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Global Market Access",
                  description:
                    "Expand your reach beyond geographical boundaries. Accept payments from customers worldwide without worrying about currency conversion or international transaction fees.",
                  bgColor: "bg-[#111111]",
                  iconBg: "bg-[#FF3B30]",
                },
                {
                  icon: Zap,
                  title: "Instant Settlement",
                  description:
                    "Experience real-time payment settlements. No more waiting for traditional banking hours or dealing with lengthy processing times. Get paid instantly for every transaction.",
                  bgColor: "bg-[#FF3B30]",
                  iconBg: "bg-white",
                },
                {
                  icon: Shield,
                  title: "Secure Transactions",
                  description:
                    "Benefit from blockchain-powered security. Every transaction is encrypted and immutable, protecting both you and your customers from fraud and chargebacks.",
                  bgColor: "bg-[#111111]",
                  iconBg: "bg-[#FF3B30]",
                },
                {
                  icon: ShoppingCart,
                  title: "Seamless Integration",
                  description:
                    "Easily integrate Fluxx payments into your existing e-commerce platform with our comprehensive API and developer tools. Start accepting crypto payments in minutes.",
                  bgColor: "bg-[#FF3B30]",
                  iconBg: "bg-white",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${feature.bgColor} rounded-[32px] p-8 relative overflow-hidden`}
                >
                  <div className="flex flex-col h-full">
                    <div
                      className={`${feature.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-6`}
                    >
                      <feature.icon
                        className={`h-6 w-6 ${feature.bgColor === "bg-[#111111]" ? "text-white" : "text-[#FF3B30]"}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Token Section */}
        <TokenSection hideColumn="merchants" />
      </main>

      <Footer />
    </motion.div>
  );
};

export default MerchantsPage;
