import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import TrustSection from "./TrustSection";
import ProductShowcase from "./ProductShowcase";
import WalletPreview from "./WalletPreview";
import SimpleSecure from "./SimpleSecure";
import TokenSection from "./TokenSection";
import FeaturesGrid from "./FeaturesGrid";
import ExploreSection from "./ExploreSection";
import FAQSection from "./FAQSection";
import { motion } from "framer-motion";
import Footer from "./Footer";

interface HomeProps {
  onSignIn?: () => void;
  onCreateAccount?: () => void;
}

const Home = ({
  onSignIn = () => (window.location.href = "/login"),
  onCreateAccount = () => (window.location.href = "/signup"),
}: HomeProps) => {
  return (
    <motion.div
      className="min-h-screen w-full bg-[#0A0A0A] overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar onSignIn={onSignIn} onCreateAccount={onCreateAccount} />

      <main className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <HeroSection onCtaClick={onCreateAccount} />
        <WalletPreview />
        <SimpleSecure />
        <FeaturesGrid />
        <TrustSection />
        <ExploreSection />
        <TokenSection />
        <FAQSection />
        <ProductShowcase />
      </main>

      <Footer />

      {/* Background gradient effects */}
      <div className="fixed top-0 left-[-50%] w-[200%] h-[500px] bg-[#FF3B30]/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-[-50%] w-[200%] h-[500px] bg-[#FF3B30]/5 blur-[120px] pointer-events-none" />
    </motion.div>
  );
};

export default Home;
