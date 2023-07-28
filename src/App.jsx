import "normalize.css";
import "./App.css";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import ContactMethods from "../components/ContactMethods";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <ContactMethods />
    </>
  );
}

export default App;
