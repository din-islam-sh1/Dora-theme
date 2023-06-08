"use client";
// import compontes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Exp from "./components/Exp";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Header - section starts */}
      <Navbar />
      {/* Header - section ends */}

      {/* Hero - setion starts */}
      <Hero />
      {/* Hero - setion ends */}

      {/* service - setion starts */}
      <Service />
      {/* service - setion ends */}

      {/* Exp - setion starts */}
      <Exp />
      {/* Exp - setion ends */}

      {/* Exp - setion starts */}
      <Portfolio />
      {/* Exp - setion ends */}

      {/* Exp - setion starts */}
      <Blog />
      {/* Exp - setion ends */}

      <Contact />

   <Footer/>
    </>
  );
}
