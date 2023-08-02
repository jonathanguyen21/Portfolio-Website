import "normalize.css";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import SocialMedia from "../components/SocialMedia";
import Skills from "../components/Skills";

function App() {
  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={1}>
          <NavBar />
          <Hero />
          <Skills />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1}>
          <Projects />
          <SocialMedia />
        </ParallaxLayer>
      </Parallax>

      {/*
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Projects />
  <SocialMedia />*/}
    </>
  );
}

export default App;
