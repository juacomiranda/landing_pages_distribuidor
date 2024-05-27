import React from "react";
import logo from "../../img/LOGO_GUEMAC_PNG.png";
import "../../styles/planes.css";

export const CardGB = (props) => (
      <div className="card border rounded text-center">
        <ul className="list-group list-group-flush">
          <li className="list-group-item h6">NUEVO PLAN<p className="text-danger">{props.GB} GB LIBRES</p></li>
          <li className="list-group-item">
            Oferta multilíneas <br />
            <h4 className="text-danger">{props.PRECIO}<br /></h4>
            {props.MESES} {props.PERMANENTE}<br/>
            Cargo fijo normal: <del>{props.FIJO}</del> <br />
            Oferta exclusiva para portabilidad
          </li> 
          <li className="list-group-item">Ver detalles del plan</li>
          <li href="https://wa.me/message/IJQXW4CKEN5YJ1" className="btn btn-danger">
            Contratar Ahora
          </li>
        </ul>
       </div> 
);