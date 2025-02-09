import React from "react";
import { motion } from "framer-motion";

const FeaturesGrid = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-24 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Lightning Fast Transaction Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#FF3B30] rounded-[32px] p-12 relative overflow-hidden"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 w-32 h-32">
                <img
                  src="https://api.dicebear.com/7.x/shapes/svg?seed=lightning-cube"
                  alt="Lightning Fast"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Lightning-Fast
                <br />
                Transaction
              </h3>
              <p className="text-white/90 text-lg">
                Worry less about your transactions.
                <br />
                They move like the speed of light.
              </p>
            </div>
          </motion.div>

          {/* Privacy Preserving Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0066FF] rounded-[32px] p-12 relative overflow-hidden"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 w-32 h-32">
                <img
                  src="https://api.dicebear.com/7.x/shapes/svg?seed=privacy-lock"
                  alt="Privacy Preserving"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Privacy-Preserving
              </h3>
              <p className="text-white/90 text-lg">
                Your security is a priority. From our Lite Wallet,
                <br />
                through your interactions with your favourite
                <br />
                merchants to your final payments, you are
                <br />
                completely safe.
              </p>
            </div>
          </motion.div>

          {/* Low Fees Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#111111] rounded-[32px] p-12 relative overflow-hidden"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-8 w-48 h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/fluxx_coin.png"
                    alt="Fluxx Coin"
                    className="w-16 h-16 absolute z-10 -right-2 top-12"
                  />
                  <img
                    src="/fluxx_coin.png"
                    alt="Fluxx Coin"
                    className="w-16 h-16 absolute z-20 -right-6 top-20"
                  />
                  <img
                    src="/fluxx_coin.png"
                    alt="Fluxx Coin"
                    className="w-16 h-16 absolute z-30 -right-10 top-28"
                  />
                  <div className="w-32 h-56 bg-[#FF3B30]/10 rounded-3xl border-2 border-[#FF3B30]/20 relative overflow-hidden flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-[#FF3B30]/20 absolute top-4" />
                  </div>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Low Fees</h3>
              <p className="text-white/90 text-lg">
                One of the most exciting aspects of the FLUXX ecosystem is that
                there are zero
                <br />
                transaction fees within our platform. By using the Fluxx Lite
                Wallet for all transactions,
                <br />
                users can enjoy seamless and cost-free transactions every day.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
