import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactMethods() {
  return (
    <section className="contact--methods container">
      <a href="https://www.linkedin.com/in/jonduynguyen/" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="2xl" className="icon" />
      </a>
      <a href="https://github.com/jonathanguyen21" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2xl" className="icon" />
      </a>
    </section>
  );
}

export default ContactMethods;
