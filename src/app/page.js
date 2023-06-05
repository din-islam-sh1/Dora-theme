// import compontes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Exp from "./components/Exp";

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
    </>
  );
}
