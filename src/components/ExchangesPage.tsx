import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Globe, Zap, Shield, LineChart } from "lucide-react";
import TokenSection from "./TokenSection";

const ExchangesPage = () => {
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
              Fluxx for Exchanges
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl mb-12"
            >
              Fluxx tokens play a pivotal role in the digital token ecosystem
              and are the most actively traded in terms of 24-hour volume.
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
              Benefits for Exchanges
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 text-center mb-16"
            >
              Partner with Fluxx to unlock new opportunities and enhance your
              exchange's offerings.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Global Market Access",
                  description:
                    "Tap into a growing global network of Fluxx users and expand your exchange's reach. Connect with traders worldwide and increase your trading volume.",
                  bgColor: "bg-[#111111]",
                  iconBg: "bg-[#FF3B30]",
                },
                {
                  icon: LineChart,
                  title: "High Trading Volume",
                  description:
                    "Benefit from Fluxx's active trading community and high liquidity. Our token's popularity ensures consistent trading volume and revenue opportunities.",
                  bgColor: "bg-[#FF3B30]",
                  iconBg: "bg-white",
                },
                {
                  icon: Shield,
                  title: "Secure Integration",
                  description:
                    "Implement Fluxx with confidence using our robust API and comprehensive documentation. Our security-first approach protects both you and your users.",
                  bgColor: "bg-[#111111]",
                  iconBg: "bg-[#FF3B30]",
                },
                {
                  icon: Zap,
                  title: "Technical Support",
                  description:
                    "Access dedicated technical support and integration assistance. Our team ensures smooth implementation and ongoing operational excellence.",
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
        <TokenSection hideColumn="exchanges" />
      </main>

      <Footer />
    </motion.div>
  );
};

export default ExchangesPage;
