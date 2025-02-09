import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const TokenSection = () => {
  return (
    <section className="w-full bg-white py-24 px-4">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-[#0A0A0A] text-center mb-16">
          The token that is disrupting
          <br />
          the global financial industry
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Individuals Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[32px] p-12 shadow-lg border border-gray-100"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#0A0A0A]">
                Fluxx for
                <br />
                Individuals
              </h3>
              <p className="text-gray-600 text-lg">
                For the first time ever, explore the thrilling feel of shopping
                from everywhere and anywhere simply because you are connected to
                our boundless ecosystem, powered by blockchain technology.
              </p>
              <Link to="/individuals">
                <Button
                  variant="link"
                  className="text-[#FF3B30] hover:text-[#FF3B30]/90 p-0 text-lg font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Merchants Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[32px] p-12 shadow-lg border border-gray-100"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#0A0A0A]">
                Fluxx for
                <br />
                Merchants
              </h3>
              <p className="text-gray-600 text-lg">
                For merchants, integrating Fluxx tokens opens up boundless
                opportunities for consumers and users to purchase products and
                services without limits.
              </p>
              <Link to="/merchants">
                <Button
                  variant="link"
                  className="text-[#FF3B30] hover:text-[#FF3B30]/90 p-0 text-lg font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Exchanges Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-[32px] p-12 shadow-lg border border-gray-100"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#0A0A0A]">
                Fluxx for
                <br />
                Exchanges
              </h3>
              <p className="text-gray-600 text-lg">
                Fluxx tokens play a pivotal role in the digital token ecosystem
                and are the most actively traded in terms of 24-hour volume.
              </p>
              <Link to="/exchanges">
                <Button
                  variant="link"
                  className="text-[#FF3B30] hover:text-[#FF3B30]/90 p-0 text-lg font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
