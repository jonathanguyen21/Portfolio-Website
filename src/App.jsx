import "normalize.css";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import SocialMedia from "../components/SocialMedia";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SocialMedia />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
