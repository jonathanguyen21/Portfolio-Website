import { motion } from "framer-motion";

const heroVariants = {
  hidden: { x: "-100vw" },
  visible: {
    x: 0,
    transition: {
      duration: 0.25,
      type: "spring",
      stiffness: 60,
    },
  },
};

const headerVariants = {
  hover: {
    scale: 1.1,
  },
};

function Hero() {
  return (
    <motion.section
      variants={heroVariants}
      initial="hidden"
      animate="visible"
      className="hero"
    >
      <a href="#">
        <motion.h1 variants={headerVariants} whileHover="hover">
          Jonathan Nguyen
        </motion.h1>
      </a>
      <h2>Software Engineer</h2>
    </motion.section>
  );
}

export default Hero;
