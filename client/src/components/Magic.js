import React from "react";
import "../../src/styles/magic.scss";
import { useMousePosition } from "../utils";

const Magic = () => {
  const mousePosition = useMousePosition();

  // pass updated positions to css for perforance animation
  // document.documentElement.style.setProperty('--x', mousePosition.x);
  // document.documentElement.style.setProperty('--y', mousePosition.y);
  // console.log("mouse", mousePosition.x, mousePosition.y);

  const Particles = [];

    for (let i = 0; i < 250; i++) {
      Particles.push(<div className="particle" key={i}></div>);
    }

  return (
    <>
    {/* <p>
      Your cursor position:
      <br />
      {JSON.stringify(mousePosition)}
    </p> */}
    <div id="particle-container">{ Particles }</div>
    </>
  );
};

export default Magic;
