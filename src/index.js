import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App/App";
import "./index.css";
import "./css/bootstrap/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import "../src/index.scss";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="modal-mobile">Please come with mobile</div>
    <div className="mobile-size">
      <App />
    </div>
  </React.StrictMode>
);
