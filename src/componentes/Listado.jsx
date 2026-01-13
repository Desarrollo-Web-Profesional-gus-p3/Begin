import React from "react";
import datos from "../datos/datos";


const Listado = () => {
  return   (  
  <div>
    <h2>Listado de chavo fresco </h2>
    <ul>
        {datos.map(persona => (
            <li key = {persona.id}>{persona.nombre} - {persona.edad}</li>
        ))}
    </ul>
    </div>
    )
};

export default Listado;
