import React from "react";
import logo from "../../img/LOGO_GUEMAC_PNG.png";
import "../../styles/planes.css";
import Accordion from 'react-bootstrap/Accordion';




export const Cards = (props) => (
      <div className="card border rounded text-center">
        <ul className="list-group list-group-flush">
          <li className="list-group-item h6">GL LIBRES <p className="text-danger">{props.GB} GB a alta velocidad</p></li>
          <li className="list-group-item">
            Oferta multilíneas <br />
            <h4 className="text-danger">{props.PRECIO}<br /></h4>
            {props.MESES} {props.PERMANENTE}<br/>
            Cargo fijo normal: <del>{props.FIJO}</del> <br />
            Oferta exclusiva para portabilidad
          </li> 
          <li className="list-group-item">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Ver detalles del Plan</Accordion.Header>
                <Accordion.Body>
                  {props.ACORDEON}
                </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </li>
          <li href="https://wa.me/message/IJQXW4CKEN5YJ1" className="btn btn-danger">
            Contratar Ahora
          </li>
        </ul>
       </div> 
);