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
import { motion } from "framer-motion";

const headerVariants = {
  hover: {
    scale: 1.1,
  },
};

function Skills() {
  return (
    <section className="skills--section container">
      <motion.div
        variants={headerVariants}
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faCss3Alt} className="icon" />
        <p className="icon__name">CSS3</p>
      </motion.div>

      <motion.div
        variants={headerVariants}
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faHtml5} className="icon" />
        <p className="icon__name">HTML5</p>
      </motion.div>

      <motion.div
        variants={headerVariants}
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faJs} className="icon" />
        <p className="icon__name">JavaScript</p>
      </motion.div>

      <motion.div
        variants={headerVariants}
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faPython} className="icon" />
        <p className="icon__name">Python</p>
      </motion.div>

      <motion.div
        variants={headerVariants}
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faC} className="icon" />
        <p className="icon__name">C++</p>
      </motion.div>

      <motion.div
        variants={headerVariants}
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faSquareGit} className="icon" />
        <p className="icon__name">Git</p>
      </motion.div>

      <motion.div
        variants={headerVariants}
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faJava} className="icon" />
        <p className="icon__name">Java</p>
      </motion.div>
    </section>
  );
}

export default Skills;
