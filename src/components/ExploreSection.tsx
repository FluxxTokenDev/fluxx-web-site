import React from "react";
import { motion } from "framer-motion";

const ExploreSection = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-24 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">
          Explore What's possible
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Marketplace Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-[32px] overflow-hidden cursor-pointer"
          >
            <div className="aspect-[4/3] w-full">
              <img
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=800&h=600&fit=crop"
                alt="Marketplace"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Upcoming Discount
                <br />
                Marketplace
                <br />
                Launch
              </h3>
            </div>
          </motion.div>

          {/* Bounty Waitlist Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-[32px] overflow-hidden cursor-pointer"
          >
            <div className="aspect-[4/3] w-full">
              <img
                src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=800&h=600&fit=crop"
                alt="Bounty Waitlist"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Join our Upcoming
                <br />
                Bounty Waitlist
              </h3>
            </div>
          </motion.div>

          {/* Events Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative rounded-[32px] overflow-hidden cursor-pointer"
          >
            <div className="aspect-[4/3] w-full">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&h=600&fit=crop"
                alt="Events and Programs"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-red-400 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                Upcoming Events
                <br />
                and Programs
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
