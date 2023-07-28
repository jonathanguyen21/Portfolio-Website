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
          <div className="project__link__div">
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

        <div className="card">
          <h4>Calculator App</h4>
          <p className="description">
            Recreation of the iOS calculator app. Created each button and tested
            edge cases to help prevent crashes. Coded in Swift using SwiftUI
            Kit.
          </p>
          <Badge language="Swift" />
          <Badge language="SwiftUI Kit" />
          <div>
            <a
              href="https://github.com/jonathanguyen21/calculator-app"
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

        <div className="card">
          <h4>Discord Entertainment Bot</h4>
          <p className="description">
            Users can add this bot for use in their Discord servers. This bot
            includes a variety of entertainment functions including: a Newegg
            web scraper, account login detail manager, etc. Coded in Python
            using BeautifulSoup.
          </p>
          <Badge language="Python" />
          <Badge language="BeautifulSoup" />
          <div>
            <a
              href="https://replit.com/@jonnylee628/Discord-Bot"
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

        <div className="card">
          <h4>RSA Encryption and Decryption</h4>
          <p className="description">
            Using an interface for encryption and decryption, users are able to
            encrypt files and decrypt them if they have access to the correct
            keys. Coded in C.
          </p>
          <Badge language="C Programming Language" />
          <div>
            <a
              href="https://github.com/jonathanguyen21/RSA-Encryption-and-Decryption"
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
      </div>
    </section>
  );
}

export default Projects;
