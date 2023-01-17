import React from "react";
import "../../src/styles/magic.scss";
import { useMousePosition, useMouseClicked, useUpdateParticles } from "../hooks";

const Magic = () => {
  // implement custom hook to track cursor
  const mousePosition = useMousePosition();
  // const mouseClicked = useMouseClicked();
  // const updateParticles = useUpdateParticles();

  

  // pass updated positions to css for animation (confirmed working)
  // document.documentElement.style.setProperty('--x', mousePosition.x);
  // document.documentElement.style.setProperty('--y', mousePosition.y);

  const Particles = [];

    for (let i = 0; i < 250; i++) {
      Particles.push(<div className="particle" key={i}></div>);
    }

  return (
    <>
    <p>
      Your cursor position:
      <br />
      {JSON.stringify(mousePosition)}
      {JSON.stringify(mouseClicked)}
    </p>
    <canvas id="particle-container">{ Particles }</canvas>
    </>
  );
};

export default Magic;
