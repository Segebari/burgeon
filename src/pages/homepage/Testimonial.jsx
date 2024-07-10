import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    name: "Adebayo O.",
    role: "Property Investor",
    text: "Burgeon Properties transformed my investment strategy. Their market insights are unparalleled.",
  },
  {
    name: "Chioma N.",
    role: "First-time Homebuyer",
    text: "The team's patience and expertise made my first property purchase a breeze. Highly recommended!",
  },
  {
    name: "Oluwaseun A.",
    role: "Commercial Developer",
    text: "Their consultation services have been crucial to our success in the Lagos market.",
  },
  {
    name: "Fatima I.",
    role: "Luxury Property Owner",
    text: "Burgeon's attention to detail in property management is exceptional. They truly understand premium real estate.",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="lg:text-3xl text-2xl text-center mb-12 font-bold underline decoration-secondary underline-offset-4">
          Testimonial
        </h2>
        <div className="bg-white rounded-lg shadow-lg p-8 relative min-h-52 flex flex-col justify-center">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="lg:text-3xl text-secondary opacity-30 absolute top-4 left-4"
          />
          <p className="lg:text-lg text-gray-700 mb-6 text-center italic px-2 lg:px-10">
            {testimonials[current].text}
          </p>
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="lg:text-3xl text-secondary opacity-30 absolute bottom-4 right-4"
          />
          <div className="text-center">
            <p className="font-semibold text-lg">
              {testimonials[current].name}
            </p>
            <p className="text-gray-300">{testimonials[current].role}</p>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === current ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
