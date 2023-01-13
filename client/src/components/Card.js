import React from "react";
import me from "../../src/assets/me.png";
import "../../src/styles/card.scss"

const Card = () => (
  <div class="card">
    <img src={me} alt="Forest" width="130px" />
    <h1>Forest Leigh</h1>
    <p class="title">Software Engineer</p>
    <p class="title">Caltech</p>
    <a href="https://github.com/forestleigh" target="_blank">
      <i class="fa fa-github fa-lg"></i>
    </a>
    <a href="https://www.linkedin.com/in/forestleigh" target="_blank">
      <i class="fa fa-linkedin fa-lg"></i>
    </a>
  </div>
);

export default Card;
