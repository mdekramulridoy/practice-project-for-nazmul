import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faTelegram,
  faDiscord,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Reactor Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Reactor</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reactor" className="hover:text-gray-600">
                  Reactor
                </Link>
              </li>
              <li>
                <Link to="/reactor-mobile" className="hover:text-gray-600">
                  Reactor Mobile app
                </Link>
              </li>
              <li>
                <Link to="/reactor-web" className="hover:text-gray-600">
                  Reactor web app
                </Link>
              </li>
            </ul>
          </div>
          {/* APIs Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">APIs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reactor-apis" className="hover:text-gray-600">
                  Reactor API's
                </Link>
              </li>
            </ul>
          </div>
          {/* Protocol Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Protocol</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/protocol-home" className="hover:text-gray-600">
                  Protocol home
                </Link>
              </li>
              <li>
                <Link to="/protocol" className="hover:text-gray-600">
                  Protocol
                </Link>
              </li>
              <li>
                <Link to="/protocol-plus" className="hover:text-gray-600">
                  Protocol+
                </Link>
              </li>
            </ul>
          </div>
          {/* Research Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Research</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-gray-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/tokenomics" className="hover:text-gray-600">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link to="/earn-with-arc" className="hover:text-gray-600">
                  Earn with Arc
                </Link>
              </li>
              <li>
                <Link to="/newsroom" className="hover:text-gray-600">
                  Newsroom
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-gray-600">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/ai-for-humans" className="hover:text-gray-600">
                  AI for humans first
                </Link>
              </li>
            </ul>
          </div>
          {/* Subscribe Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/reactor-subscription" className="hover:text-gray-600">
                  Reactor Subscription
                </Link>
              </li>
              <li>
                <Link to="/apis-subscription" className="hover:text-gray-600">
                  APIs Subscription
                </Link>
              </li>
            </ul>
          </div>
          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms-of-service" className="hover:text-gray-600">
                  Reactor Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-600">
                  Reactor Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/responsible-disclosure" className="hover:text-gray-600">
                  Reactor Responsible Disclosure Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Icons */}
        <div className="flex justify-between items-center mt-8">
          <button className="text-2xl font-bold text-black">arc</button>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-gray-800 hover:text-gray-600" />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} className="text-gray-800 hover:text-gray-600" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} className="text-gray-800 hover:text-gray-600" />
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMedium} className="text-gray-800 hover:text-gray-600" />
            </a>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-2 border-t border-gray-300 pt-5 text-center">
          <p className="text-sm">
            &copy; Copyright - ARC Labs AG 2024 | All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Disclaimer: By using this site you agree that nothing included
            herein, as well as on the app, and other products offered by ARC
            constitutes investment advice, investment recommendations, or
            anything to do with investments. Many parts of ARC are AI-generated
            and you hold ARC to no responsibility for any of the copy, or
            information offered through ARC, ARC's products, or any of the
            companies in the ARC Group of Companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
