import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

interface ProductShowcaseProps {
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  title = "Experience the Future of Digital Payments",
  description = "Seamless, secure, and lightning-fast transactions at your fingertips",
  features = [
    {
      title: "Mobile Wallet",
      description:
        "Manage your digital assets on the go with our intuitive mobile wallet",
      image:
        "https://images.unsplash.com/photo-1544568100-847a948585b9?w=500&h=800&fit=crop",
    },
    {
      title: "Instant Transfers",
      description: "Send and receive payments globally in seconds",
      image:
        "https://images.unsplash.com/photo-1616077168712-fc6c788db4af?w=500&h=800&fit=crop",
    },
    {
      title: "Secure Storage",
      description: "Bank-grade security for your digital assets",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=800&fit=crop",
    },
  ],
}) => {
  return (
    <section className="w-full min-h-screen bg-[#0A0A0A] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-[#1A1A1A] border-none overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-[#FF3B30] to-[#FF8730] rounded-full">
            <button className="px-8 py-3 bg-[#0A0A0A] text-white rounded-full hover:bg-[#1A1A1A] transition-colors">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
