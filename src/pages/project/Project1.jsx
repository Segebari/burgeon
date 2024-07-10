import React, { useState } from "react";
import Nav from "../../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faWifi,
  faSwimmingPool,
  faDumbbell,
  faCar,
  faTree,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import projectImage1 from "../../assets/1111.jpeg";
import projectImage2 from "../../assets/imgi.jpeg";
import projectImage3 from "../../assets/imgii.jpeg";
import projectImage4 from "../../assets/imgiii.jpeg";
import projectImage5 from "../../assets/imgiv.jpeg";
import projectImage6 from "../../assets/imgv.jpeg";
import projectImage7 from "../../assets/imgvi.jpeg";
import Contact from "../homepage/Contact";
import Footer from "../homepage/Footer";

const Project1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  const images = [
    projectImage1,
    projectImage2,
    projectImage3,
    projectImage4,
    projectImage5,
    projectImage6,
    projectImage7,
    projectImage1,
    projectImage2,
    projectImage3,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto px-4 py-16 lg:py-32">
        <div className="relative w-full lg:w-4/5 mx-auto h-[50vh] lg:h-[80vh] rounded-3xl overflow-hidden mb-8">
          <img
            src={images[currentSlide]}
            alt={`Project slide ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-secondary text-white py-2 px-4 lg:px-6 rounded-r-xl"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-secondary text-white py-2 px-4 lg:px-6 rounded-l-xl"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 text-white">
            <h2 className="text-2xl lg:text-3xl font-bold">Luxe Towers</h2>
            <p className="text-lg lg:text-xl">project address</p>
          </div>
        </div>

        <div className="relative overflow-hidden mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Project thumbnail ${index + 1}`}
                className={`w-24 h-32 lg:w-32 lg:h-40 object-cover rounded-xl cursor-pointer ${
                  currentSlide === index ? "border-4 border-secondary" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* New Project Details Section */}
        <div className="mt-8 lg:mt-16 bg-white shadow-xl rounded-3xl overflow-hidden">
          <div className="p-6 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-primary">
              Luxe Towers: Elevate Your Lifestyle
            </h2>
            <p className="text-gray-700 mb-6 lg:mb-8 leading-relaxed">
              Luxe Towers redefines urban living with its cutting-edge design
              and unparalleled amenities. Nestled in the heart of the city, this
              architectural marvel offers panoramic views and seamless access to
              the bustling metropolis. Our apartments blend modern aesthetics
              with functional spaces, creating the perfect sanctuary for
              discerning residents who demand the best in comfort and style.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faWifi}
                  className="text-secondary text-xl lg:text-2xl mr-3 lg:mr-4"
                />
                <span className="text-gray-700">High-Speed Wi-Fi</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faSwimmingPool}
                  className="text-secondary text-xl lg:text-2xl mr-3 lg:mr-4"
                />
                <span className="text-gray-700">Infinity Pool</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faDumbbell}
                  className="text-secondary text-xl lg:text-2xl mr-3 lg:mr-4"
                />
                <span className="text-gray-700">State-of-the-art Gym</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCar}
                  className="text-secondary text-xl lg:text-2xl mr-3 lg:mr-4"
                />
                <span className="text-gray-700">Secure Parking</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faTree}
                  className="text-secondary text-xl lg:text-2xl mr-3 lg:mr-4"
                />
                <span className="text-gray-700">Landscaped Gardens</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-secondary text-xl lg:text-2xl mr-3 lg:mr-4"
                />
                <span className="text-gray-700">24/7 Security</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 lg:p-6 rounded-xl">
              <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4 text-primary">
                Project Highlights
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 lg:space-y-2">
                <li>Sustainable design with LEED Gold certification</li>
                <li>Smart home technology in every unit</li>
                <li>Rooftop lounge with breathtaking city views</li>
                <li>On-site concierge services</li>
                <li>Pet-friendly community with dedicated pet areas</li>
              </ul>
            </div>
          </div>

          <div className="bg-secondarylight p-6 lg:p-12">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-primary">
              Apartment Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 text-gray-700">
              <div>
                <h4 className="font-semibold mb-1 lg:mb-2">1 Bedroom</h4>
                <p>650-800 sq ft</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 lg:mb-2">2 Bedrooms</h4>
                <p>950-1200 sq ft</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 lg:mb-2">3 Bedrooms</h4>
                <p>1400-1800 sq ft</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1 lg:mb-2">Penthouse</h4>
                <p>2500-3000 sq ft</p>
              </div>
            </div>
          </div>
        </div>

        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Project1;
