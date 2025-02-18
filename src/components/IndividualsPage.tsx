import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Globe, Zap, Shield, Wallet } from "lucide-react";
import TokenSection from "./TokenSection";

const IndividualsPage = () => {
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
              Fluxx for Individuals
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl mb-12"
            >
              For the first time ever, explore the thrilling feel of shopping
              from everywhere and anywhere simply because you are connected to
              our boundless ecosystem, powered by blockchain technology.
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
              Benefits for Individuals
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-center mb-16"
            >
              Explore all the benefits for individuals within Fluxx Ecosystem
              and take turns in deciding which you want to enjoy per time.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Seamless Borderless Transactions",
                  description:
                    "FLUXX eliminates geographical limitations, allowing individuals to send and receive payments instantly across the world without the delays or high fees associated with traditional banking systems.",
                  bgColor: "bg-[#111111]",
                  iconBg: "bg-[#FF3B30]",
                },
                {
                  icon: Zap,
                  title: "Low to Zero Transaction Fees",
                  description:
                    "Within the FLUXX ecosystem, users enjoy zero transaction fees for wallet-to-wallet transfers, making daily transactions more cost-effective compared to conventional financial services.",
                  bgColor: "bg-[#FF3B30]",
                  iconBg: "bg-white",
                },
                {
                  icon: Shield,
                  title: "Enhanced Security & Privacy",
                  description:
                    "Built on blockchain technology, FLUXX ensures secure, tamper-proof transactions with enhanced privacy protections, giving users full control over their assets without reliance on third parties.",
                  bgColor: "bg-[#111111]",
                  iconBg: "bg-[#FF3B30]",
                },
                {
                  icon: Wallet,
                  title: "Financial Inclusion & Accessibility",
                  description:
                    "FLUXX empowers individuals in underserved regions by providing an easy-to-use digital financial system, enabling them to participate in the global economy without needing a traditional bank account.",
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
        <TokenSection hideColumn="individuals" />
      </main>

      <Footer />
    </motion.div>
  );
};

export default IndividualsPage;
