import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Borderless Payments for the Digital Age",
  description = "Experience the future of finance with Fluxx. Send, receive, and manage your digital assets seamlessly across borders with our cutting-edge cryptocurrency platform.",
  ctaText = "Get Started",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <div className="min-h-[700px] w-full bg-[#0A0A0A] relative overflow-hidden">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-xl"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={onCtaClick}
                size="lg"
                className="bg-[#FF3B30] hover:bg-[#FF3B30]/90 text-white px-8 py-6 text-lg"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Right content - Animated Coin */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="relative w-full h-[400px] flex items-center justify-center"
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
              className="w-64 h-64 md:w-80 md:h-80"
            >
              <img
                src="/fluxx_coin.png"
                alt="Fluxx Coin"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FF3B30]/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default HeroSection;
