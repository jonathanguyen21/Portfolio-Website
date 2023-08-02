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

const skillVariants = {
  hidden: {
    opacity: 0,
    y: "105vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
      when: "beforeChildren",
    },
  },
  hover: {
    scale: 1.1,
  },
};

function Skills() {
  return (
    <section className="skills--section container">
      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faCss3Alt} className="icon" />
        <p className="icon__name">CSS3</p>
      </motion.div>

      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faHtml5} className="icon" />
        <p className="icon__name">HTML5</p>
      </motion.div>

      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faJs} className="icon" />
        <p className="icon__name">JavaScript</p>
      </motion.div>

      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faPython} className="icon" />
        <p className="icon__name">Python</p>
      </motion.div>

      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faC} className="icon" />
        <p className="icon__name">C++</p>
      </motion.div>

      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faSquareGit} className="icon" />
        <p className="icon__name">Git</p>
      </motion.div>

      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faJava} className="icon" />
        <p className="icon__name">Java</p>
      </motion.div>

      <motion.div
        variants={skillVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="skills__icon"
      >
        <FontAwesomeIcon icon={faSwift} className="icon" />
        <p className="icon__name">Swift</p>
      </motion.div>
    </section>
  );
}

export default Skills;
