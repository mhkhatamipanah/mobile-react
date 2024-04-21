import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import "../Cards/card.scss";
function Card({ icon, pic, title, description, nestedRoute }) {
  let srtingId = nestedRoute.toString();
  return (
    <>
          <div className="card ">
            <div className="image-card">
              <div>
                <Link to={srtingId}>
                  <img className="img-card" src={pic} />
                </Link>
              </div>
            </div>
            <div className="m-2">
              <div className="text-card">
                <div className="title-card">
                  <h2> {title} </h2>
                  <img src={icon} />
                </div>
                <h4> {description}</h4>
                <Link to={srtingId} className="btn btn-primary">
                  View More
                </Link>
              </div>
            </div>
      </div>
      <Outlet />
    </>
  );
}

export default Card;
