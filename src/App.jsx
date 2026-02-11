import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ParticlesBg from "./components/ParticlesBg";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <CursorGlow />

      {/* glow blobs */}
      <div className="bg-blur top-[-180px] left-[-220px]" style={{ background: "#2563eb" }} />
      <div className="bg-blur bottom-[-220px] right-[-180px]" style={{ background: "#a855f7" }} />

      {/* particles */}
      <ParticlesBg />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
