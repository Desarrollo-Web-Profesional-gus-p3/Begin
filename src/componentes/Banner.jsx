import React from "react";
import "../styles/Banner.css";       // Estilos personalizados
import bannerImage from "../assets/banner_image.jpg"; // Imagen del banner

/**
 * Componente Banner
 * 
 * Banner principal llamativo al sitio web.
 * Incluye un imagen, descripcion del sitio y un boton de accion.
 */

const Banner = () => {
  return (
    // CONTENEDOR PRINCIPAL
    <div className="body1"> 
      
      {/*PARTE IZQUIERDA: Texto informativo */}
      <div className="containerBanner">
        <h2>El sitio de BGMA</h2>                    {/* Subtítulo */}
        <h1>Gestión de cursos online gratuita</h1>   {/* Título principal */}
        <h3>
          Accede a cientos de cursos especializados creados por profesionales
          de la industria. Aprende a tu propio ritmo, con proyectos prácticos
          y certificaciones que impulsarán tu carrera. ¡El conocimiento nunca
          fue tan accesible!
        </h3>                                         {/* Descripción */}
        <button>Ver Cursos Gratis</button>           {/* Botón de acción */}
      </div>
      
      {/* PARTE DERECHA: Imagen */}
      <div className="containerBanner2">
        <img src={bannerImage} alt="Plataforma de cursos online BGMA" />
      </div>
      
    </div>
  );
};

export default Banner;