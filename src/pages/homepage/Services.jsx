import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import { faBusinessTime } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const slides = [
    {
      icon: faHelmetSafety,
      title: "Property Development",
      description:
        "We transform visions into reality, overseeing high-quality projects from conception to completion. Our developments in Lagos Island maximize value while enhancing urban landscapes.",
    },
    {
      icon: faBuilding,
      title: "Brokerages",
      description:
        "Our expert team connects clients with exceptional properties across Lagos' most desirable neighborhoods. We ensure smooth, transparent transactions, leveraging deep market knowledge to achieve optimal outcomes.",
    },
    {
      icon: faBusinessTime,
      title: "Real Estate Consultation",
      description:
        "We provide strategic insights on investments, property management, and market trends. Our tailored advice helps clients navigate the Lagos real estate market with confidence.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div
        className="flex flex-col items-center pt-24 mb-20 min-h-[80vh] border-b px-4 sm:px-0"
        id="services"
      >
        <h2 className="lg:text-3xl text-2xl font-bold pb-10 sm:pb-20 underline decoration-secondary underline-offset-4 text-center">
          Our Services
        </h2>
        <div className="w-full sm:w-96 flex flex-col items-center min-h-64">
          <FontAwesomeIcon
            icon={slides[currentSlide].icon}
            className="w-6 h-6 sm:w-8 sm:h-8 pb-3 sm:pb-5"
          />
          <h4 className="font-semibold pb-3 sm:pb-5 text-xl sm:text-2xl text-center">
            {slides[currentSlide].title}
          </h4>
          <p className="text-center font-medium text-gray-700 text-sm sm:text-base">
            {slides[currentSlide].description}
          </p>
        </div>

        <div className="flex mt-6 sm:mt-0 sm:relative sm:bottom-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`mx-1 focus:outline-none ${
                currentSlide === index ? "text-blue-500" : "text-gray-300"
              }`}
            >
              <FontAwesomeIcon icon={faCircle} className="w-2 h-2" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
