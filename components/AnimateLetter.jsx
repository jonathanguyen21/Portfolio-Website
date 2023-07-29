import { useState } from "react";

function AnimateLetter(props) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className="container">
      <p
        className={hovered ? "animate__animated animate__rubberBand test" : ""}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        {props.letter}
      </p>
    </div>
  );
}

export default AnimateLetter;
