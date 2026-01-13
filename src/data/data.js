/**
 * Configuración de enlaces de navegación para la aplicación.
 * Centraliza todas las rutas del menú principal para facilitar
 * mantenimiento y consistencia en la navegación.
 * 
 * @type {Array<{id: number, name: string, title: string, url: string}>}
 * 
 * @prop {number} id - Identificador único para React keys
 * @prop {string} name - Nombre interno (inglés)
 * @prop {string} title - Título mostrado (español)
 * @prop {string} url - Ruta de navegación
 */

const navbarLinks = [
    {
        id: 1,
        name: "Home",
        title: "Inicio",
        url: "/home"
    }, {
        id: 2,
        name: "About",
        title: "Acerca de",
        url: "/about"
    },
    {
        id: 3,
        name: "courses",
        title: "Cursos",
        url: "/courses"
    }
];
export { navbarLinks };