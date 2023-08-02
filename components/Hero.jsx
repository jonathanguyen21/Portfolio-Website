import { motion } from "framer-motion";
import Skills from "../components/Skills";

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

function Hero() {
  return (
    <motion.section animate={{ y: -30 }} className="hero">
      <a href="#">
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
    </motion.section>
  );
}

export default Hero;
