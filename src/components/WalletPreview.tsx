import React from "react";
import { motion } from "framer-motion";

const WalletPreview = () => {
  return (
    <section className="w-full bg-white py-16 px-4 rounded-t-[48px]">
      <div className="container mx-auto">
        {/* Coming Soon Text */}
        <div className="text-center mb-6">
          <p className="text-gray-500">Coming Soon: Fluxx Lite Wallet</p>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] text-center mb-6">
          Experience an easy way to pay
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          The Fluxx Lite Wallet adds possibilities beyond your imagination.
          Don't be left out from the millions of users downloading the wallet
          today. Join quickly to shop before your favourite merchant's store
          gets empty.
        </p>

        {/* Preview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FF3B30] rounded-[32px] p-8 relative overflow-hidden shadow-xl"
          >
            <div className="max-w-sm">
              <img
                src="/Screenshot_2025_removebg-preview.png"
                alt="Wallet Preview"
                className="w-full rounded-2xl shadow-lg mb-8"
              />
              <h3 className="text-3xl font-bold text-white mb-4">
                Create Your Wallet
              </h3>
              <p className="text-white/90">
                You are just one search away from finding your favourite wallet.
                Download the Fluxx Lite Wallet on Playstore today.
              </p>
            </div>
            <div className="absolute top-4 right-8 text-white/10 text-[200px] font-bold leading-none">
              1
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#111111] rounded-[32px] p-8 relative overflow-hidden shadow-xl"
          >
            <div className="max-w-sm">
              <h3 className="text-3xl font-bold text-white mb-4">
                Use everywhere
              </h3>
              <p className="text-gray-400">
                Trade like there is no limit. Trade for Value, Trade with Fluxx
              </p>
              <img
                src="/Screenshot_2025_removebg-preview.png"
                alt="Wallet Usage Preview"
                className="w-full rounded-2xl shadow-lg mb-8"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WalletPreview;
