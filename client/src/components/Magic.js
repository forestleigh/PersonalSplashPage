import React from "react";
import "../../src/styles/magic.scss";

const Magic = () => {

  const Particles = [];

    for (let i = 0; i < 300; i++) {
      Particles.push(<div class="particle" key={i}></div>);
    }

  return <div id="particle-container">{ Particles }</div>;
};

export default Magic;
