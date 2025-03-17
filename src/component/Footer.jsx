import { Youtube, Twitter, Linkedin } from "lucide-react";
import { SiWelcometothejungle } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex items-start justify-center sm:justify-start">
            <div className="w-16 h-16 sm:w-20 sm:h-20">
              <SiWelcometothejungle className="text-white text-2xl sm:text-3xl" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-normal mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base hover:text-gray-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-300">
                  Book a demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-normal mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base hover:text-gray-300">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-normal mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-base hover:text-gray-300">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-base hover:text-gray-300">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-400 text-center md:text-left">
            © 2022 Welcome. All rights reserved.
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube size={18} />
              <span className="sr-only">YouTube</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
