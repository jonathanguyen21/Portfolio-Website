import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const arrowVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: [0.2, 1],
    transition: {
      delay: 1.5,
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

function scrollToHero() {
  const element = document.getElementById("hero--section");
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}

export const Footer = () => {
  return (
    <section className="footer container">
      <p>
        Designed by <strong>Jonathan Nguyen</strong> using the{" "}
        <strong>React</strong> framework. Styled with{" "}
        <strong>Framer Motion</strong> for animations and <strong>CSS</strong>{" "}
        for all other styling. Deployed using <strong>Vercel</strong>.
      </p>
      <motion.a
        variants={arrowVariants}
        initial="hidden"
        animate="visible"
        onClick={scrollToHero}
      >
        <FontAwesomeIcon icon={faAngleUp} className="footer__down-arrow" />
      </motion.a>
    </section>
  );
};
