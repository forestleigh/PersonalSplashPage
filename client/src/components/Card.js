import React from "react";
import me from "../../src/assets/me.png";
import "../../src/styles/card.scss"

const Card = () => (
  <div className="card">
    <img src={me} alt="Forest" width="130px" />
    <h1>Forest Leigh</h1>
    <p className="title">Software Engineer</p>
    <p className="title">Caltech</p>
    <a href="https://github.com/forestleigh" target="_blank">
      <i className="fa fa-github fa-lg"></i>
    </a>
    <a href="https://www.linkedin.com/in/forestleigh" target="_blank">
      <i className="fa fa-linkedin fa-lg"></i>
    </a>
  </div>
);

export default Card;
