import Badge from "./Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

const cardVariants = {
  hover: {
    scale: 1.05,
  },
};

function Projects() {
  return (
    <section className="projects cards--container" id="projects--section">
      <header className="">
        <FadeInWhenVisible>
          <h2>Projects</h2>
        </FadeInWhenVisible>
      </header>
      <div className="cards--container">
        <FadeInWhenVisible>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="card grid--1x2"
          >
            <section className="grid__element">
              <h4>HealthGPT</h4>
              <p className="description">
                Chat interface that uses the GPT-3.5 API to allow users to ask
                for any medical advice they need. The chat uses a trained model
                that is designed for answering to any patients' needs.
              </p>
              <Badge language="React" />
              <Badge language="GPT-3.5 API" />
              <div className="project__link__div">
                <a
                  href="https://github.com/jonathanguyen21/healthgpt"
                  target="_blank"
                >
                  View Code
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="cards__link__arrow"
                  />
                </a>
              </div>
              <div>
                <a href="https://www.healthhub.wiki/" target="_blank">
                  View Website
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="cards__link__arrow"
                  />
                </a>
              </div>
            </section>
            <img
              src="/images/HealthGPT.png"
              alt="image of project"
              className="card__image"
            />
          </motion.div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="card grid--1x2"
          >
            <section className="grid__element">
              <h4>Portfolio Website (This Site)</h4>
              <p className="description">
                Website that shows off my portfolio and experience I have.
                Topics include an About, Projects, Experience, and Skills
                section. This was my first project as a frontend developer.
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
            </section>
            <img
              src="/images/prewiew_img.png"
              alt="image of project"
              className="card__image"
            />
          </motion.div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="card grid--1x2"
          >
            <section className="grid__element">
              <h4>NumberNinja - Calculator App</h4>
              <p className="description">
                Recreation of the iOS calculator app. Created each button and
                tested edge cases to help prevent crashes. Coded in Swift using
                SwiftUI Kit.
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
            </section>
            <img
              src="/images/calculator_project.png"
              alt="image of project"
              className="card__image"
            />
          </motion.div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="card grid--1x2"
          >
            <section className="grid__element">
              <h4>Peanut Bot - Discord Entertainment Bot</h4>
              <p className="description">
                Users can add this bot for use in their Discord servers. This
                bot includes a variety of entertainment functions including: a
                language translater, Newegg web scraper, account login detail
                manager, etc. Coded in Python using BeautifulSoup.
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
            </section>
            <img
              src="/images/discord_bot_project.png"
              alt="image of project"
              className="card__image"
            />
          </motion.div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="card grid--1x2"
          >
            <section className="grid__element">
              <h4>SecureMe - RSA Encryption</h4>
              <p className="description">
                Using an interface for encryption and decryption, users are able
                to encrypt files and decrypt them if they have access to the
                correct keys. Coded in C.
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
            </section>
            <img
              src="/images/rsa_project.png"
              alt="image of project"
              className="card__image"
            />
          </motion.div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}

export default Projects;
