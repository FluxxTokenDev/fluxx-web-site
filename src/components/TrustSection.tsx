import React from "react";
import { motion } from "framer-motion";

interface TrustSectionProps {
  partnerLogos?: Array<{
    name: string;
    url: string;
    imageUrl: string;
  }>;
}

const defaultPartners = [
  {
    name: "Partner 1",
    url: "#",
    imageUrl: "https://api.dicebear.com/7.x/initials/svg?seed=P1",
  },
  {
    name: "Partner 2",
    url: "#",
    imageUrl: "https://api.dicebear.com/7.x/initials/svg?seed=P2",
  },
  {
    name: "Partner 3",
    url: "#",
    imageUrl: "https://api.dicebear.com/7.x/initials/svg?seed=P3",
  },
  {
    name: "Partner 4",
    url: "#",
    imageUrl: "https://api.dicebear.com/7.x/initials/svg?seed=P4",
  },
];

const TrustSection = ({
  partnerLogos = defaultPartners,
}: TrustSectionProps) => {
  return (
    <section className="w-full py-16 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join the growing network of financial institutions and businesses
            that trust Fluxx for their digital payment needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partnerLogos.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url}
              className="w-32 h-32 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={partner.imageUrl}
                alt={partner.name}
                className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
