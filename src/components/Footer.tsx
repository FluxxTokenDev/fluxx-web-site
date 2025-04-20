import React from "react";
import { Twitter, Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A0A0A] py-16 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-5 space-y-6">
            <img src="/fluxxlogo.png" alt="Fluxx Logo" className="h-12" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Fluxx supports and is also interested in easing how remotely
              commercial and e-commercial outlets engage with global trades and
              activities while seamlessly experiencing how it feels to make good
              profit with the first digital commerce and e-commerce token.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://x.com/Fluxx_Token"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              
              {/*<a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>*/}
              {/*<a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>*/}
              {/*<a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>*/}
              {/*<a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>*/}
            </div>
          </div>

          {/* Company Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Legal Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fluxx Bounty
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="md:col-span-3">
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Office
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
