import "normalize.css";
import "./App.css";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";

function App() {
  console.log("hello");
  return (
    <>
      <Hero />
      <About />

      <section className="projects container">
        <h2>Projects</h2>
      </section>
    </>
  );
}

export default App;
