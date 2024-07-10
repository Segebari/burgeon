import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faFacebookF,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faTimes } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission here
    console.log("Email submitted:", email);
    closeModal();
  };

  return (
    <div className="py-8 sm:py-16 relative" id="contact-us">
      <h2 className="text-2xl lg:text-3xl font-bold pb-10 sm:pb-20 underline decoration-secondary underline-offset-4 text-center">
        Contact Us
      </h2>
      <div className="w-[90%] sm:w-[80%] md:w-[70%] h-auto sm:h-[70vh] mx-auto bg-secondary rounded-3xl p-6 sm:p-10 md:p-20 text-white">
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Elevate Your Lifestyle. Luxury Redefined.
          </p>
        </div>

        <div className="flex justify-center mb-6 sm:mb-8">
          <button
            onClick={openModal}
            className="px-4 sm:px-6 py-3 sm:py-4 bg-white text-secondary rounded-2xl hover:bg-gray-100 transition duration-300 text-sm sm:text-base"
          >
            Contact Us
          </button>
        </div>

        <div className="text-center">
          <p className="text-xs sm:text-sm mb-3 sm:mb-4">Or Reach Us Via</p>
          <div className="flex justify-center space-x-3">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-xl sm:text-2xl hover:text-gray-200 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-xl sm:text-2xl hover:text-gray-200 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="text-xl sm:text-2xl hover:text-gray-200 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-xl sm:text-2xl hover:text-gray-200 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-xl sm:text-2xl hover:text-gray-200 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-secondary">
                Email Us
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type your email here..."
                className="w-full h-32 sm:h-40 px-3 sm:px-4 py-2 text-gray-800 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary resize-none text-sm sm:text-base"
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-3 sm:px-4 py-2 bg-secondary text-white rounded-xl hover:bg-primary transition duration-300 text-sm sm:text-base"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
