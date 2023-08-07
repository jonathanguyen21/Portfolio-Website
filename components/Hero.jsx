import { motion } from "framer-motion";
import Skills from "../components/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const headerVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      duration: 0.25,
      type: "spring",
      stiffness: 60,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const arrowVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function scrollToAbout() {
  const element = document.getElementById("about--section");
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}

function Hero() {
  return (
    <motion.section animate={{ y: -30 }} className="hero">
      <a href="#" className="hero__name">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          Jonathan Nguyen
        </motion.h1>
      </a>
      <motion.h2 variants={headerVariants} initial="hidden" animate="visible">
        Software Engineer
      </motion.h2>
      <Skills />
      <motion.a
        variants={arrowVariants}
        initial="hidden"
        animate="visible"
        onClick={scrollToAbout}
      >
        <FontAwesomeIcon icon={faAngleDown} className="hero__down-arrow" />
      </motion.a>
    </motion.section>
  );
}

export default Hero;
