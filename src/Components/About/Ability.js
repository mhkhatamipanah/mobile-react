import React from "react";
import CircleProgress from "./circle/CircleProgress";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";

import LinearProgressBar from "./linear/LinearProgressBar";
import "../About/ability.scss";

export function linearclick() {
  setTimeout(() => {
    document.getElementById("circle-btn").classList.remove("active-btn2");
    document.getElementById("linear-btn").classList.add("active-btn1");
  }, 20);

  

}
function circleclick() {
  document.getElementById("linear-btn").classList.remove("active-btn1");
  document.getElementById("circle-btn").classList.add("active-btn2");
}

function Ability() {
  return (
    <div className="margin-ability">
      <div className="home-ability">
        <div className="margin-left20">
          <div className="margin-switch">
            <div className="text-and-switch">
              <h2 className="text-myability">My Ability</h2>
              <div>
                <Link
                  to="linear"
                  onClick={linearclick}
                  className="btn-secondary btn1 active-btn1"
                  id="linear-btn"
                >
                  linear
                </Link>
                <Link
                  to="circle"
                  onClick={circleclick}
                  className="btn-secondary btn2"
                  id="circle-btn"
                >
                  circle
                </Link>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Ability;
