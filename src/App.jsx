import React from "react";
import Navbar from "./componentes/Navbar";
import Banner from "./componentes/Banner";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
      </div>
      <Banner />
    </>
  );
};

export default App;

// import React from "react";
// import Saludo from "./componentes/Saludo";
// import Listado from "./componentes/Listado";

// const App = () => {
//   console.log("Componente saludo");
//   return (
//     <>
//       <Listado />
//     </>
//   );
// };

// export default App;
