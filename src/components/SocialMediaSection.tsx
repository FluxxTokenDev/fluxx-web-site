import React from "react";

const SocialMediaSection = () => {
  return (
    <section
      className="py-16 text-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/path/to/soc-med.jpg')" }}
    >
      <h2 className="text-3xl font-bold mb-4">Connect with Fluxx</h2>
      <p className="mb-8 text-lg">
        Join the conversation and stay updated by following us on social media.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://x.com/Fluxx_Token"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#1DA1F2] rounded-full text-white font-medium hover:bg-opacity-90 transition"
        >
          Follow us on X
        </a>
        <a
          href="https://t.me/FluxxTokenCommunity"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#0088CC] rounded-full text-white font-medium hover:bg-opacity-90 transition"
        >
          Join us on Telegram
        </a>
      </div>
    </section>
  );
};

export default SocialMediaSection;
