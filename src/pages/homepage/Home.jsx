import React from "react";
import Nav from "../../components/Nav";
import Services from "./Services";
import About from "../homepage/About";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import heroVideo from "../../assets/herovid.mp4";

const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 h-full">
          <Nav />
          <div className="w-full h-full flex items-center" id="welcome">
            <div className="w-full">
              <div className="text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black pb-3 sm:pb-5 transition-all duration-500 ease-in-out text-white">
                  Elevate Your Lifestyle. <br /> Luxury Redefined.
                </h1>
                <p className="w-full max-w-3xl mx-auto text-sm sm:text-base lg:text-lg text-white">
                  Luxury redefined, where opulence meets comfort. Discover
                  exceptional properties that elevate your lifestyle.
                </p>
                <div className="mt-6 sm:mt-8">
                  <a href="#services">
                    <button
                      className="text-white border border-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl animate-slide-left hover:bg-white hover:text-secondary text-sm sm:text-base transition duration-300"
                      aria-label="Begin Your Journey"
                    >
                      Begin Your Journey
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative">
        <Services />
        <About />
        <Testimonial />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
