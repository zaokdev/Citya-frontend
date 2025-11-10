import { useState } from "react";
import { Link } from "react-router"; // Asumiendo que usas react-router-dom

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

  return (
    <nav className="sticky top-0 bg-gray-800 text-white shadow-lg z-50">
      {" "}
      {/* Fondo oscuro fijo para contraste */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand (Izquierda) */}
        <Link
          to="/"
          className="flex items-center text-2xl font-bold text-white hover:text-blue-300 transition-colors"
        >
          <svg
            className="w-8 h-8 mr-2 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-7 7m7-7v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h3v-3m-3 3h-3a1 1 0 01-1-1v-3m12 0a1 1 0 011 1v3h3a1 1 0 001-1m-1 0h-3V9m-3 3h3V9m-3 3H9v3"
            ></path>
          </svg>
          Citya
        </Link>

        {/* Botón del menú móvil (Solo en pantallas pequeñas) */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <img className="h-7 w-7 bg-blue-900" /> // Icono de cerrar si el menú está abierto
            ) : (
              <img className="h-7 w-7 bg-red-900" /> // Icono de hamburguesa si está cerrado
            )}
          </button>
        </div>

        {/* Menú de navegación (Desktop) y Botón de Tema (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="text-white hover:text-blue-300 transition-colors text-lg font-medium py-2 px-3 rounded-md"
              >
                Home
              </Link>
            </li>
            {/* Si quisieras más elementos, los añadirías aquí */}
            {/* <li><Link to="/about" className="text-white hover:text-blue-300 transition-colors">Acerca</Link></li> */}
          </ul>
        </div>
      </div>
      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 pb-4 shadow-inner">
          {" "}
          {/* Fondo ligeramente diferente para diferenciar del nav principal */}
          <ul className="flex flex-col items-center space-y-2 py-2">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                className="block text-white hover:text-blue-300 transition-colors text-lg font-medium py-2 px-3 rounded-md w-full text-center"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
