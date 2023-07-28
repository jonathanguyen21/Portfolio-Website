import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <section className="skills--section container">
      <div className="skills__icon">
        <FontAwesomeIcon icon={faCss3Alt} className="icon" />
        <p>CSS3</p>
      </div>

      <div className="skills__icon">
        <FontAwesomeIcon icon={faHtml5} className="icon" />
        <p>HTML5</p>
      </div>
      <div className="skills__icon">
        <FontAwesomeIcon icon={faJs} className="icon" />
        <p>JavaScript</p>
      </div>
    </section>
  );
}

export default Skills;
