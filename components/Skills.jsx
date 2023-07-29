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
        <p className="icon__name">CSS3</p>
      </div>

      <div className="skills__icon">
        <FontAwesomeIcon icon={faHtml5} className="icon" />
        <p className="icon__name">HTML5</p>
      </div>
      <div className="skills__icon">
        <FontAwesomeIcon icon={faJs} className="icon" />
        <p className="icon__name">JavaScript</p>
      </div>
    </section>
  );
}

export default Skills;
