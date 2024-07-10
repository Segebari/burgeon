import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        navigate("/", { replace: true });
      }
    }
  }, [location, navigate]);

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/?section=${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full flex items-center z-30 transition-all duration-300 ${
        isScrolled ? "bg-white lg:bg-opacity-80 backdrop-blur-sm py-4" : "py-7"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Hamburger menu for small screens */}
        <button className="lg:hidden text-primary z-50" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Logo */}
        <Link to="/" className="">
          <img src={logo} alt="logo" className="w-7" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-10 text-secondary font-semibold">
          {["Welcome", "Services", "About Us", "FAQs"].map((item) => (
            <li key={item}>
              <button
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className="hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <Link
              to="/projects"
              className="hover:text-primary transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact-us")}
              className="text-secondary hover:text-white border border-secondary px-4 py-2 rounded-xl animate-slide-left"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-[120vh] bg-white transform flex justify-center pt-[3rem] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="flex flex-col items-center gap-6 text-lg text-primary font-semibold relative top-20">
          {["Welcome", "Services", "About Us", "FAQs"].map((item) => (
            <li key={item}>
              <button
                onClick={() =>
                  scrollToSection(item.toLowerCase().replace(" ", "-"))
                }
                className="hover:text-secondary transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <Link
              to="/projects"
              className="hover:text-secondary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact-us")}
              className="text-secondary hover:text-white border border-secondary px-4 py-2 rounded-xl"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
