import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebookF,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <img src={logo} alt="Burgeon Properties Logo" className="h-10 mb-8" />

          <div className="flex space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </a>
          </div>

          <p className=" text-primary text-center max-w-md mb-8">
            Elevating Lagos real estate experiences in Lekki, Ikoyi, <br /> and
            Victoria Island.
          </p>

          <p className="text-xs text-gray-400">
            &copy; 2024 Burgeon Properties Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
