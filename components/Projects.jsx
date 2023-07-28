import Badge from "./Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  return (
    <section className="projects" id="projects--section">
      <header className="container">
        <h2>Projects</h2>
      </header>
      <div className="cards container">
        <div className="card">
          <h4>Portfolio Website (This Site)</h4>
          <p className="description">
            Website that shows off my portfolio and experience I have. Topics
            include an About, Projects, Experience, and Skills section. This was
            my first project as a frontend developer.
          </p>
          <Badge language="React" />
          <Badge language="JavaScript" />
          <Badge language="CSS" />
          <Badge language="HTML" />

          <a
            href="https://github.com/jonathanguyen21/portfolio-website"
            target="_blank"
          >
            View Code
            <FontAwesomeIcon
              icon={faArrowRight}
              className="cards__link__arrow"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
