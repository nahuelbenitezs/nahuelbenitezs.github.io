import React from "react";
import Navbar from './section/Navbar'
import Hero from './section/Hero'
import About from './section/About'
import Projects from "./section/Projects";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      <section className="min-h-screen"></section>
      
      
      {/*contact*/}
      {/*footer*/}
    </div>
  );
};

export default App;
