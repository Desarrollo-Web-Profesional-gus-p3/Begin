// import { navbarLinks } from "../data/data";
/* eslint-disable no-unused-vars */
// Importación de herramientas de animación
import { AnimatePresence, motion } from "motion/react";

/**
 * Componente MenuResponsivo
 * 
 * Muestra el menú de navegación en dispositivos móviles
 * con animaciones suaves al abrir y cerrar.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {boolean} props.open - Controla si el menú está visible
 * @param {Array} props.navbarLinks - Lista de enlaces a mostrar
 */
const MenuResponsivo = ({ open, navbarLinks }) => {
  /**
   * Configuración de la animación del menú
   * 
   * initial: Estado inicial (invisible, 100px arriba)
   * animate: Estado final (visible, en posición normal)
   * exit: Estado al desaparecer (vuelve arriba y se desvanece)
   * transition: Duración de la animación (0.3 segundos)
   */
  const animacion = {
    initial: { opacity: 0, y: -100 },  // Comienza invisible y arriba
    animate: { opacity: 1, y: 0 },     // Termina visible y en su lugar
    exit: { opacity: 0, y: -100 },     // Al salir, sube y desaparece
    transition: { duration: 0.3 },     // Todo dura 300 milisegundos
  };

  return (
    /**
     * AnimatePresence - Controlador de animaciones
     * Permite que el menú haga animación al desaparecer
     * mode="await": Espera a que termine la animación actual
     *               antes de mostrar otra cosa
     */
    <AnimatePresence mode="await">
      {/* Solo muestra el menú si 'open' es true */}
      {open && (
        /**
         * motion.div - Contenedor animado
         * 
         * Aplica la configuración de animación definida arriba
         * Se mueve y aparece/desaparece suavemente
         */
        <motion.div
          {...animacion}  // Aplica todas las configuraciones de animación
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          {/* Contenedor del menú con estilos */}
          <div className="text-xl font-semibold uppercase bg-primary text-white rounded-b-md py-7 m-6">
            {/* Lista de enlaces del menú */}
            <ul className="flex flex-col justify-center items-center gap-10">
              {/* Recorre todos los enlaces y los muestra */}
              {navbarLinks.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuResponsivo;