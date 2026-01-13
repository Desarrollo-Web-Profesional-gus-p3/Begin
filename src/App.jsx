// import React from "react";
// import Navbar from "./componentes/Navbar";

// const App = () => {
//   return (
//     <div className="overflow-x-hidden">
//       <Navbar />
//     </div>
//   );
// };

// export default App;

import React from "react";
import Saludo from "./componentes/Saludo";
import Listado from "./componentes/Listado";

const App = () => {
  console.log("Componente saludo");
  return (
    <>
      <Listado />
    </>
  );
};

export default App;
