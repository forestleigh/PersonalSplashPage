import React from "react";
import "../../src/styles/magic.scss";

const Magic = () => {

  const Particles = [];

    for (let i = 0; i < 100; i++) {
      Particles.push(<div className="particle" key={i}></div>);
    }

  return (
    <>
    <div id="particle-container">{ Particles }</div>
    </>
  );
};

export default Magic;
