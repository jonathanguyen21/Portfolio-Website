import "normalize.css";
import "./App.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import SocialMedia from "../components/SocialMedia";
import { Contact } from "../components/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SocialMedia />
    </>
  );
}

export default App;
