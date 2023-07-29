import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function SocialMedia() {
  const [hoveredLinkedin, setHoveredLinkedin] = useState(false);
  const toggleHoverLinkedin = () => setHoveredLinkedin(!hoveredLinkedin);
  const [hoveredGithub, setHoveredGithub] = useState(false);
  const toggleHoverGithub = () => setHoveredGithub(!hoveredGithub);

  return (
    <section className="contact--methods container">
      <a href="https://www.linkedin.com/in/jonduynguyen/" target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          size="2xl"
          className={
            hoveredLinkedin
              ? "icon animate__animated animate__rubberBand"
              : "icon"
          }
          onMouseEnter={toggleHoverLinkedin}
          onMouseLeave={toggleHoverLinkedin}
        />
      </a>

      <a href="https://github.com/jonathanguyen21" target="_blank">
        <FontAwesomeIcon
          icon={faGithub}
          size="2xl"
          className={
            hoveredGithub
              ? "icon animate__animated animate__rubberBand"
              : "icon"
          }
          onMouseEnter={toggleHoverGithub}
          onMouseLeave={toggleHoverGithub}
        />
      </a>
    </section>
  );
}

export default SocialMedia;
