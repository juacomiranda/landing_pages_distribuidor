import React from "react";
import "../../styles/planes.css";

import {Cards} from "../component/cards";
import {CardGB} from "../component/cardgblibres";

export const Planes = () => (
  <div id="planesindividuales" className="container mt-3">
    <div className="card-group">
      <Cards GB="300" PRECIO="$10.990" MESES="Mensual por 12 meses" FIJO="$14.990" ACORDEON="Internet 300gb alta velocidad, Minutos Libres a 300 Números, Roaming 40 min + 2 GB + 40 SMS" />
      <Cards GB="500" PRECIO="$13.990" MESES="Mensual por 12 meses" FIJO="$18.990"/>
      <CardGB PRECIO="$17.990" MESES="Mensual por 12 meses" FIJO="22.990"/>
    </div> 
  </div>
);
