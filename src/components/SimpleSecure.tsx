import React from "react";
import { Button } from "./ui/button";

const SimpleSecure = () => {
  return (
    <section className="w-full bg-[#0A0A0A] py-24 px-4 relative">
      <div className="container mx-auto text-center">
        {/* How It Works Button */}
        <Button
          variant="secondary"
          className="mb-8 bg-gray-700/50 text-white hover:bg-gray-700/70"
        >
          How It Works
        </Button>

        {/* Main Title */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-[ClashDisplay]">
          Simple. Secure. Seamless
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto">
          The Fluxx Lite Wallet aids possibilities beyond your imagination.
          Don't be left out from the millions of users downloading the wallet
          today. Join quickly to shop before your favourite merchant's store
          gets empty.
        </p>
      </div>
    </section>
  );
};

export default SimpleSecure;
