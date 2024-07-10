import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from  './pages/homepage/Home'
import Projects from './pages/projects/Projects'
import Pji from "./pages/project/Project1";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/1" element={<Pji />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App