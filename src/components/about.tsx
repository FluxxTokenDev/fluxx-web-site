import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TokenSection from "./TokenSection";

const About = () => {
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
              About Fluxx
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl"
            >
              Revolutionizing digital payments through blockchain technology
            </motion.p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full bg-[#0A0A0A] py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-white"
            >
              <p className="text-lg leading-relaxed">
                FLUXX is a next-generation blockchain platform designed to
                create a seamless, borderless payment ecosystem that goes beyond
                traditional fiat currencies. It empowers users to transact,
                save, and build wealth using a secure, decentralized, and
                efficient cryptocurrency system. FLUXX provides individuals and
                businesses with the tools to embrace digital finance
                confidently, enabling real-time, low-cost transactions across
                the globe without the barriers imposed by conventional banking
                systems.
              </p>
              <p className="text-lg leading-relaxed">
                At its core, FLUXX operates on a blockchain framework that
                ensures transparency, security, and immutability. Users can send
                and receive payments in FLUXX tokens, which are optimized for
                speed and minimal transaction fees. The platform integrates Web3
                technologies to support diverse use cases, from e-commerce
                purchases to peer-to-peer transfers, creating a versatile
                financial ecosystem. With FLUXX, you're not just engaging in
                transactions—you're participating in a movement that redefines
                how value is exchanged in a connected world.
              </p>
            </motion.div>

            {/* Floating Coin */}
            <motion.div
              className="relative w-full h-48 mt-12 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-32 h-32"
              >
                <img
                  src="/fluxx_coin.png"
                  alt="Fluxx Coin"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full bg-white py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                FLUXX is on a mission to transform global commerce by
                integrating the power of cryptocurrency into everyday financial
                interactions. Our platform is designed to provide fast, secure,
                and transparent transactions, ensuring that businesses and
                individuals can operate with confidence in a digital-first
                economy. We strive to bridge the gap between traditional finance
                and decentralized assets, making cryptocurrency adoption
                effortless and practical for a diverse range of users. Through
                our innovative solutions, we aim to simplify cross-border
                transactions, reduce costs, and enhance financial accessibility
                for all.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="w-full bg-[#0A0A0A] py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Vision
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                At FLUXX, we envision a world where decentralized commerce
                becomes the standard, enabling individuals and businesses to
                transact freely without the limitations of traditional financial
                systems. By leveraging the power of cryptocurrency and
                blockchain technology, we aim to create an ecosystem where
                financial transactions are seamless, borderless, and accessible
                to everyone, regardless of location or economic status. Our
                vision is to break down barriers, eliminate unnecessary
                intermediaries, and empower users with greater financial control
                and security.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full bg-[#0A0A0A] py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description:
                    "Constantly pushing the boundaries of what's possible in digital payments",
                },
                {
                  title: "Security",
                  description:
                    "Ensuring the highest level of protection for our users' assets and data",
                },
                {
                  title: "Accessibility",
                  description:
                    "Making digital payments available to everyone, everywhere",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-[#111111] rounded-[32px] p-8 text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Token Section */}
        <TokenSection />
      </main>

      <Footer />

      {/* Background gradient effects */}
      <div className="fixed top-0 left-[-50%] w-[200%] h-[500px] bg-[#FF3B30]/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-[-50%] w-[200%] h-[500px] bg-[#FF3B30]/5 blur-[120px] pointer-events-none" />
    </motion.div>
  );
};

export default About;
