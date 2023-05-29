// import compontes
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      {/* Header - section starts */}
      <Navbar />
      {/* Header - section ends */}

      {/* Banner - setion starts */}
      <Hero />
      {/* Banner - setion ends */}
    </>
  );
}
