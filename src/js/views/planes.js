import React from "react";
import logo from "../../img/LOGO_GUEMAC_PNG.png";
import "../../styles/planes.css";

export const Planes = () => (
  <div className="card">
    <img src={logo} className="card-img-top" alt="imagen" />
    <div className="card-body">
      <h5 className="card-title">Plan Max L Libre</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a
        href="https://wa.me/message/IJQXW4CKEN5YJ1"
        className="btn btn-primary"
      >
        Go somewhere
      </a>
    </div>
  </div>
);
