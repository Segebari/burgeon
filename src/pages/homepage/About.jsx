import React from "react";
import bgImage from "../../assets/1111.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const highlights = [
    "Expert brokerage services",
    "Innovative property development",
    "Insightful real estate consultancy",
    "Portfolio across prime Lagos locations",
    "Years of local market experience",
  ];

  return (
    <div className="w-full py-20  pb-32" id="about-us">
      <div className="container mx-auto px-4">
        <h2 className="lg:text-3xl text-2xl text-center font-bold mb-16 underline decoration-secondary underline-offset-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-[60vh] rounded-3xl shadow-lg"
            ></div>
            <div className="absolute top-4 left-4 w-full h-full rounded-3xl bg-secondary opacity-30 -z-10"></div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <p className="lg:text-lg leading-relaxed text-gray-700">
              At the heart of Lagos' prime real estate market, Burgeon
              Properties Limited stands as a beacon of excellence in Lekki Phase
              1. Our comprehensive suite of services and years of experience
              have established us as a trusted name in the industry.
            </p>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="text-secondary"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="lg:text-lg leading-relaxed text-gray-700">
              Our commitment to client satisfaction and our established presence
              set us apart, ensuring we deliver value at every step of your
              property journey, whether you're investing, developing, or seeking
              professional advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
