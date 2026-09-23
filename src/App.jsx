import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import About from "./components/About.jsx";
import Educations from "./components/Educations.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const rawPath = location.pathname.replace(/^\//, "").replace(/\/$/, "");
    const targetId = location.hash ? location.hash.replace(/^#/, "") : (rawPath || "home");
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location.pathname, location.hash]);

  return null;
}

function Portfolio() {
  return (
    <>
      <HeroSection />
      <About />
      <Educations />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

function Layout() {
  return (
    <div className={"bg-mono-bg text-mono-primary font-sans flex flex-col md:flex-row min-h-screen selection:bg-mono-surface selection:text-mono-primary"}>
      <Navbar />
      <main className={"grow flex flex-col w-full"}>
        <ScrollHandler />
        <Portfolio />
        <ScrollTop />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

