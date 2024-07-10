import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Pj1 from "../../assets/1111.jpeg";
import Contact from "../homepage/Contact";
import Footer from "../homepage/Footer";
import Pji from "../project/Project1";

const ProjectSection = ({ id, title, image, description }) => (
  <Link to={`/project/${id}`} className="block w-full mb-24">
    <div className="relative w-4/5 mx-auto h-[80vh] group">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white p-8">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </div>
  </Link>
);

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Luxe Towers",
      image: Pj1,
      description: "High-end residential complex in the heart of Lagos.",
    },
    {
      id: 2,
      title: "Green Valley Estate",
      image: Pj1,
      description: "Eco-friendly suburban development with modern amenities.",
    },
    {
      id: 3,
      title: "Marina Business Park",
      image: Pj1,
      description: "State-of-the-art office spaces with a waterfront view.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="container mx-auto py-20">
        <h1 className="text-4xl font-bold py-20 underline decoration-secondary underline-offset-4 text-center">
          Our Projects
        </h1>
        {projects.map((project) => (
          <ProjectSection key={project.id} {...project} />
        ))}
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Projects;
