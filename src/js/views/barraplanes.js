import React from "react";
import logo from "../../img/LOGO_GUEMAC_PNG.png";
import "../../styles/planes.css";


export const BarraPlanes = () => 
<div className="container mt-4 text-center">
  <div className="row">
    <div className="col">
      <h3 id="boton" onClick={mostrar}>Planes Individuales</h3>
    </div>
    <div className="col">
      <h3 id="boton" onClick={mostrarmulti}>Planes Multilíneas</h3>
    </div>
  </div>
</div>
;
function mostrarmulti(){
  document.getElementById('planesmulti').style.display = 'block';
  document.getElementById('planesindividuales').style.display = 'none';

  
} 
function mostrar(){
  document.getElementById('planesindividuales').style.display = 'block';
  document.getElementById('planesmulti').style.display = 'none';


}


