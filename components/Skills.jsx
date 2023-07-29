import {
  faCss3Alt,
  faHtml5,
  faJava,
  faJs,
  faPython,
  faSquareGit,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons";
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

      <div className="skills__icon">
        <FontAwesomeIcon icon={faPython} className="icon" />
        <p className="icon__name">Python</p>
      </div>

      <div className="skills__icon">
        <FontAwesomeIcon icon={faC} className="icon" />
        <p className="icon__name">C++</p>
      </div>

      <div className="skills__icon">
        <FontAwesomeIcon icon={faSquareGit} className="icon" />
        <p className="icon__name">Git</p>
      </div>

      <div className="skills__icon">
        <FontAwesomeIcon icon={faJava} className="icon" />
        <p className="icon__name">Java</p>
      </div>
    </section>
  );
}

export default Skills;
