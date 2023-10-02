import React, { Component } from "react";
import logo from "../../img/LOGO_GUEMAC_PNG.png";

import "../../styles/home.css";

export const Footer = () => (
  <footer className="footer py-3 text-center">
    <img src={logo} className="float-start ms-5" />
    <p>
      <a href="http://www.pymeclarochile.cl">Distribuidor Autorizado</a>
    </p>
  </footer>
);
