import React from "react";
import logo from "../../img/LOGO_GUEMAC_PNG.png";
import "../../styles/planes.css";


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
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className ="accordion-item">
              <h2 className  ="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <p className="text-info">Ver detalles del plan</p>
                </button>
              </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                {props.ACORDEON}
              </div>
            </div>
            </div>
          </div>
            </li>
          <li href="https://wa.me/message/IJQXW4CKEN5YJ1" className="btn btn-danger">
            Contratar Ahora
          </li>
        </ul>
       </div> 
);