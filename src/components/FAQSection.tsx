import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const FAQSection = ({
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about Fluxx and our services",
  faqs = [
    {
      question: "What is Fluxx and how does it work?",
      answer:
        "FLUXX is a next-generation blockchain platform designed to create a seamless, borderless payment ecosystem that goes beyond traditional fiat currencies. It empowers users to transact, save, and build wealth using a secure, decentralized, and efficient cryptocurrency system. FLUXX provides individuals and businesses with the tools to embrace digital finance confidently, enabling real-time, low-cost transactions across the globe without the barriers imposed by conventional banking systems.\n\nAt its core, FLUXX operates on a blockchain framework that ensures transparency, security, and immutability. Users can send and receive payments in FLUXX tokens, which are optimized for speed and minimal transaction fees. The platform integrates Web3 technologies to support diverse use cases, from e-commerce purchases to peer-to-peer transfers, creating a versatile financial ecosystem. With FLUXX, you’re not just engaging in transactions—you’re participating in a movement that redefines how value is exchanged in a connected world.",
    },
    {
      question: "How is FLUXX different from other cryptocurrencies?",
      answer:
        "FLUXX stands out from other cryptocurrencies by seamlessly bridging digital assets with everyday commerce, creating a practical and user-friendly payment ecosystem. Unlike many cryptocurrencies focused solely on investment or trading, FLUXX is designed for real-world utility, allowing users to effortlessly spend their tokens directly on goods and services. Its innovative approach combines a borderless payment solution with a commitment to speed, transparency, and accessibility, ensuring everyone—from individuals to businesses—can harness the power of blockchain technology without complexity. With FLUXX, digital currency becomes a tool for life, not just the market.",
    },
    {
      question: "Can FLUXX be used globally?",
      answer:
        "Yes, FLUXX is designed for global use, enabling seamless transactions across borders without the limitations of traditional currencies. With its blockchain-powered ecosystem, users can send, receive, and spend FLUXX tokens anywhere in the world effortlessly.",
    },
    {
      question: "How do I create a FLUXX wallet?",
      answer:
        "Creating a FLUXX wallet is simple and secure. Download FLUXX from Playstore, sign up on the FLUXX platform, complete the verification process, and your wallet will be ready to store, send, and receive FLUXX tokens.",
    },
    {
      question: "What are the steps to purchase FLUXX tokens?",
      answer:
        "To purchase FLUXX tokens, first create an account on the FLUXX platform and complete the necessary KYC verification. Once verified, you can deposit funds and easily purchase FLUXX tokens through the available payment methods or exchange platforms. Also, early adopters will be qualified for free FLUXX Token Airdrops which makes the process of owning FLUXX TOKEN much easier.",
    },
    {
      question: "How can I start accepting FLUXX for my business?",
      answer:
        "To start accepting FLUXX for your business, the first step is to sign up on the FLUXX platform and create a merchant account. This process involves verifying your business and providing the necessary details so that you can securely receive payments. Once your account is set up, you’ll gain access to the FLUXX Merchant Dashboard, where you can manage all transactions and monitor payments. Next, integrate FLUXX into your payment system by using our ready-to-use payment gateway solutions to integrate FLUXX payments into your existing e-commerce platform. FLUXX offers seamless integration options, ensuring that accepting cryptocurrency is just as easy as traditional methods. You can also generate unique wallet addresses for each transaction to track payments and simplify accounting. Once integrated, you’ll be able to accept FLUXX tokens as payment for goods and services. Customers who wish to pay with FLUXX can simply transfer tokens to your designated wallet, and you'll receive instant confirmation of the transaction. This integration opens up a global market of cryptocurrency users and ensures fast, secure, and borderless payments, enhancing your business’s growth potential",
    },
    {
      question: "Is FLUXX secure?",
      answer:
        "Yes, FLUXX uses robust blockchain technology to ensure the security and transparency of all transactions. It employs industry-standard encryption protocols and decentralized systems to protect user data and funds. Additionally, continuous updates and security audits are performed to maintain a secure environment for all users.",
    },
    {
      question: "What measures does FLUXX take to prevent fraud?",
      answer:
        "FLUXX implements multiple layers of security to safeguard against fraud. At the core, it uses decentralized blockchain technology, which ensures that all transactions are transparent, traceable, and immutable. This prevents any alterations to transaction data, providing a secure and reliable way to verify the legitimacy of each transaction. Additionally, FLUXX employs advanced encryption protocols to protect users' personal and financial information. By encrypting data both in transit and at rest, FLUXX minimizes the risk of unauthorized access. Regular security audits and updates further enhance the platform's defense against potential vulnerabilities, ensuring that it remains resilient to emerging threats. To prevent fraudulent activity, FLUXX also employs real-time monitoring of all transactions for any suspicious behavior. Automated alerts and manual reviews are triggered when potential fraud is detected, allowing for quick intervention to mitigate any risks. This proactive approach helps create a safe and secure environment for all FLUXX users.",
    },
    {
      question: "Are there transaction fees for using FLUXX?",
      answer:
        "One of the most exciting aspects of the FLUXX ecosystem is that there are zero transaction fees within our platform. By using the Fluxx Lite Wallet for all transactions, users can enjoy seamless and cost-free transactions every day. This is a major part of FLUXX’s commitment to building a user-friendly and sustainable environment where you can transact without worrying about hidden costs. It's designed to make FLUXX an efficient and frictionless experience for everyone. The beauty of this system lies in the fact that all transactions within the FLUXX ecosystem are between Fluxx wallets, which means there are no third-party intermediaries to charge fees. This keeps things simple and allows for an optimized user experience, which reflects the power and potential of FLUXX. We believe in creating a world where everyday transactions can be as easy and affordable as possible, and this is just one way FLUXX stands apart from others in the market. However, as the ecosystem grows and transactions start to extend beyond Fluxx wallets to other exchanges or external platforms, a small fee may apply to cover blockchain transaction costs. This step is necessary to maintain the integrity and security of the blockchain and ensure the scalability of FLUXX as it expands globally. While these fees will be minimal, it’s important to note that the majority of FLUXX transactions will remain free within our ecosystem.",
    },
    {
      question: "How fast are FLUXX transactions?",
      answer:
        "FLUXX transactions are designed for speed and efficiency, with most transactions being processed almost instantly within the FLUXX ecosystem. Thanks to our advanced blockchain infrastructure and the Fluxx Lite Wallet, sending and receiving FLUXX tokens is quick and seamless. This ensures that users can enjoy smooth, real-time transactions without delays, making FLUXX perfect for everyday use.",
    },
    {
      question: "What currencies can I use to buy FLUXX?",
      answer:
        "You can purchase FLUXX using your local currency or USDT (Tether), providing flexibility for users across the globe. Whether you're using fiat currency or a stablecoin like USDT, we make the process seamless and convenient. This ensures you have various options to get started with FLUXX effortlessly.",
    },
    {
      question: "What should I do if I lose access to my wallet?",
      answer:
        "If you lose access to your FLUXX wallet, the first step is to try and recover it using your wallet recovery phrase. This phrase is a set of words provided when you created your wallet, and it is your key to restoring access to your funds. Ensure that you stored your recovery phrase in a safe place, as it is the most reliable method for regaining access to your wallet. If you don’t have your recovery phrase or are unable to restore your wallet, we recommend contacting FLUXX customer support for further assistance. They can guide you through any additional steps to secure your account or explore other recovery options available. It’s essential to act promptly to minimize any risks associated with losing wallet access. To prevent future issues, we recommend setting up additional security features, such as two-factor authentication (2FA), and keeping your recovery phrase and wallet details stored securely offline. These proactive steps will help ensure your wallet remains safe and accessible even in case of unforeseen circumstances.",
    },
    {
      question: "How can I contact FLUXX support?",
      answer:
        "You can contact FLUXX support by visiting our support page on the website, where you’ll find options to reach us via email or live chat. We are available 24/7 to assist with any inquiries or issues you may have. Our team is dedicated to providing prompt and helpful responses to ensure a seamless experience for all users.",
    },
    {
      question: "Are there resources to learn more about using FLUXX?",
      answer:
        "Yes, to stay up to date with all things FLUXX, we encourage you to sign up for our newsletter where we'll regularly publish news, guides and global insights that will help you navigate the FLUXX ecosystem effectively and keep you informed about any new features or developments.",
    },
  ],
}: FAQSectionProps) => {
  return (
    <section className="w-full bg-[#0A0A0A] py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-lg">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-800"
              >
                <AccordionTrigger className="text-white hover:text-[#FF3B30] text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
