import React from "react";
import "../../styles/planes.css";

import {Cards} from "../component/cards";
import {CardGB} from "../component/cardgblibres";

export const Planes2 = () => (
  <div id="planesmulti" className="container mt-3 mb-5 oculto">
    <div className="card-group">
      <Cards GB="300" PRECIO="$7.495" MESES="c/u por 6 meses. Luego" PERMANENTE="11.243 al mes" FIJO="$14.990" ACORDEON="Internet 300gb alta velocidad, Minutos Libres a 300 Números, Roaming 40 min + 2 GB + 40 SMS"/>
      <Cards GB="500" PRECIO="$9.495" MESES="c/u por 6 meses. Luego" PERMANENTE="14.243 al mes" FIJO="$18.990" ACORDEON="Internet 500gb alta velocidad, Minutos Libres a 300 Números, Roaming 60 min + 3 GB + 60 SMS"/>
      <CardGB PRECIO="$11.495" MESES="c/u por 6 meses. Luego" PERMANENTE="17.243 al mes" FIJO="22.990" ACORDEON="Internet GB Libres, Minutos Libres a 300 Números, Roaming 100 min + 5 GB + 100 SMS"/>
    </div> 
  </div>
);
