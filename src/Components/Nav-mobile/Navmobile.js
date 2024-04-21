import React from "react";
import { BrowserRouter as Router, Route, Routes, Link , Outlet } from "react-router-dom";
import {linearclick} from "../About/Ability"

// component
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import Portfilo from "../Portfilo/Cards/Portfilo";
import About from "../About/About";

// css
import "../Nav-mobile/navmobile.scss";

// icon
import home from "../../images/icons/11.png";
import about from "../../images/icons/22.png";
import message from "../../images/icons/33.png";
import portfilo from "../../images/icons/44.png";

// addclass

function homeClick() {
  const allContainerNav = document.querySelectorAll(".container-img-text");
  removeClasslistActive();
  allContainerNav[0].childNodes[0].classList.add("active-nav-img");
  allContainerNav[0].childNodes[1].classList.add("active-nav-p");
}
function portfiloClick() {
  const allContainerNav = document.querySelectorAll(".container-img-text");

  removeClasslistActive();
  allContainerNav[1].childNodes[0].classList.add("active-nav-img");
  allContainerNav[1].childNodes[1].classList.add("active-nav-p");
}
function contactClick() {
  const allContainerNav = document.querySelectorAll(".container-img-text");

  removeClasslistActive();
  allContainerNav[2].childNodes[0].classList.add("active-nav-img");
  allContainerNav[2].childNodes[1].classList.add("active-nav-p");
}
function aboutClick() {
  linearclick()
  const allContainerNav = document.querySelectorAll(".container-img-text");

  removeClasslistActive();
  allContainerNav[3].childNodes[0].classList.add("active-nav-img");
  allContainerNav[3].childNodes[1].classList.add("active-nav-p");
}

function removeClasslistActive() {
  const allContainerNav = document.querySelectorAll(".container-img-text");
  for (let i = 0; i < allContainerNav.length; i++) {
    // img
    allContainerNav[i].childNodes[0].classList.remove("active-nav-img");
    // p
    allContainerNav[i].childNodes[1].classList.remove("active-nav-p");
  }
}

function Navmobile() {
  return (
    <>
      <Outlet/>
      <div className="nav">
        <ul className="icons">
          <Link to="/" onClick={homeClick}>
            <div className="container-img-text ">
              <img className="img-nav active-nav-img" src={home} />
              <p className="active-nav-p">Home</p>
            </div>
          </Link>
          <Link to="portfilo" onClick={portfiloClick}>
            <div className="container-img-text">
              <img className="img-nav" src={portfilo}></img>
              <p>Portfilo</p>
            </div>
          </Link>
          <Link to="contact" onClick={contactClick}>
            <div className="container-img-text">
              <img src={message}></img>
              <p>Contact</p>
            </div>
          </Link>
          <Link to="about" onClick={aboutClick}>
            <div className="container-img-text">
              <img src={about}></img>
              <p>About</p>
            </div>
          </Link>
        </ul>
      </div>
      </>
  );
}

export default Navmobile;
