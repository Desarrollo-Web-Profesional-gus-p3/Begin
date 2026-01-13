import React from "react";
import { navbarLinks } from "../data/data";
import { CiSearch } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";
import { useState } from "react";
import MenuResponsivo from "./MenuResponsivo";
/* eslint-disable no-unused-vars */
// Importación de herramientas de animación
import { AnimatePresence, motion } from "motion/react";

/**
 * Componente Navbar
 *
 * Barra de navegación principal responsive.
 * Incluye logo, menú desktop, acciones de usuario y menú hamburguesa móvil.
 */

const Navbar = () => {
  /*Estado del menú de hambuerga*/
  const [abierto, setAbierto] = useState(false);

  /*Animacion de los items del menu */
  const animacionElementosMenu = {
    whileHover: {
      scale: 1.05,
      y: -3,
      color: "#ff8901",
    },
    transition: {
      type: "spring",
      stiffness: 400,
    },
  };
  /*Animacion del boton primario */
  const animacionBotonPrimario = {
    whileHover: {
      scale: 1.08,
      y: -4,
      backgroundColor: "#ff8901",
      boxShadow: "0 10px 20px rgba(255, 137, 1, 0.3)",
    },
    whileTap: {
      scale: 0.95,
      y: 0,
    },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
    },
  };
  return (
    <>
      <nav>
        {/*Contenedor principal con flexbox*/}
        <div
          className="container flex justify-between font-bold
items-center py-8"
        >
          {/*Logo y marca del sitio*/}
          {
            <div className="text-2xl flex items-center gap-2 uppercase">
              <ImBooks />
              <p>El sitio de BARG</p>
              <p className="text-secondary">Cursos</p>
            </div>
          }

          {/*Menu de navegacion, gracias a la clase Hidden es posible ocultarlos para mostrar 
          el icono de hambuerguesa que nos permite usar el menu responsibo
        */}
          {
            <div className="hidden md:block">
              <ul className="flex items-center gap-7 text-gray-600">
                {navbarLinks.map((item) => (
                  <motion.li
                    {...animacionElementosMenu}
                    key={item.id}
                    className="inline-block py-1 px-3 text-gray-600 hover:text-primary cursor-pointer"
                  >
                    <a href={item.url}>{item.title}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          }

          {/*Acciones del usuarios (botones e iconos)*/}
          {
            <div className="flex items-center gap-4">
              <button
                className="text-2xl hover:bg-primary hover:text-white
rounded-full p-2 duration-300"
              >
                <CiSearch />
              </button>
              <button
                className="text-2xl hover:bg-primary hover:text-white
rounded-full p-2 duration-300"
              >
                <PiShoppingCartLight />
              </button>

              < motion.button
              {...animacionBotonPrimario}
                className="hover:bg-primary font-semibold rounded-md
text-white bg-secondary px-4 py-2 duration-300 border-primary hidden md:block"
              >
                Ingresar
              </motion.button>
            </div>
          }
          {/*Menu de navegación (barra de hamburgesa)*/}
          {
            <div className="md:hidden">
              {/*Icono de hamburguesa que nos permite cambiar el estado de abierto (true , flase)*/}
              <MdMenu
                onClick={() => setAbierto(!abierto)}
                className="text-4xl"
              />
            </div>
          }
        </div>
      </nav>
      {/*Componente de MenuResponsivo que obtiene el estado de abierto para su vizualizacion.
              Y obtiene el Array (navbarLinks) que permite la vizualizacion de los links*/}
      <MenuResponsivo open={abierto} navbarLinks={navbarLinks} />
      {
        //
      }
    </>
  );
};
export default Navbar;
