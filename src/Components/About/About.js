import React from "react";

import Ability from "./Ability";

import "../About/about.scss";
import personPlaceholder from "../../images/20.png";

import iconPlace from "../../images/5.png";
import icontelphone from "../../images/4.png";

function About() {
  return (
    <div>
      <div className="person-about">
        <img src={personPlaceholder} />
        <h2> Mohammad Hosein Khatami Panah </h2>
        <h4>Front-end | Web developer</h4>
      </div>
      <div className="margin-descripton">
        <div className="description">
          <p>
            Front-end developer and soon back-end, I am studying economics at
            Kharazmi University, I love coding and its challenges, and I entered
            this field spontaneously, I am interested in graphics, learning has
            always been and still is attractive to me.
          </p>
        </div>
      </div>
      <section className="place-and-phone">
        <div>
          <img src={iconPlace} />
          <h4>Iran - tehran</h4>
        </div>
        <span></span>
        <div>
          <img src={icontelphone} />
          <h4>+989023665306</h4>
        </div>
      </section>

      <Ability />
      <div></div>
    </div>
  );
}

export default About;
