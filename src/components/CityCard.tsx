import { Link } from "react-router"; // Asegúrate de tener react-router-dom instalado

// Componente de la Tarjeta de Ciudad
const CityCard = ({ city }: any) => {
  // Función para obtener la URL de la bandera, con un fallback si el country_code no existe
  const getFlagUrl = (countryCode: any) => {
    return countryCode ? `/flags/4x3/${countryCode.toLowerCase()}.svg` : "";
  };

  // Determinar el nombre principal de la ciudad/ubicación
  const mainCityName =
    city.properties.city || city.properties.address_line1 || "Unknown location";
  const countryName = city.properties.country || "";
  const stateName = city.properties.state ? `${city.properties.state}, ` : "";

  return (
    <Link
      to={{
        pathname: `city/${city.properties.place_id}`,
        search: `?lat=${city.properties.lat}&lon=${city.properties.lon}`,
      }}
      className="col-span-1 md:col-span-4 bg-white rounded-lg shadow-md p-6 relative 
                 hover:shadow-xl transition-shadow duration-300 h-full
                 flex flex-col justify-between" // Flexbox para distribuir el contenido verticalmente
    >
      {/* Bandera del país */}
      {city.properties.country_code && (
        <div className="absolute top-4 right-4 bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center overflow-hidden border border-gray-200">
          <img
            src={getFlagUrl(city.properties.country_code)}
            alt={`Bandera de ${countryName}`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Título de la Ciudad */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-1 leading-tight">
          {mainCityName}
        </h3>
        <p className="text-base text-gray-600 mb-4">
          {stateName}
          {countryName}
        </p>
      </div>

      <hr className="border-t border-gray-200 my-4" />

      {/* Detalles Adicionales */}
      <div className="space-y-2 text-gray-700 grow">
        {" "}
        {/* flex-grow para ocupar espacio disponible */}
        {/* Zona Horaria */}
        {city.properties.timezone && city.properties.timezone.name && (
          <div className="flex items-center text-sm">
            <svg
              className="w-4 h-4 mr-2 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>{city.properties.timezone.name}</span>
            {city.properties.timezone.offset_from_utc && (
              <span className="ml-1 text-gray-500">
                ({city.properties.timezone.offset_from_utc})
              </span>
            )}
          </div>
        )}
        {/* Latitud y Longitud */}
        {city.properties.lat && city.properties.lon && (
          <div className="flex items-center text-sm">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
            <span>
              Lat: {city.properties.lat.toFixed(4)}, Lon:{" "}
              {city.properties.lon.toFixed(4)}
            </span>
          </div>
        )}
        {/* Categoría (si existe) */}
        {/* Población (si existe) */}
        {city.properties.population && (
          <div className="flex items-center text-sm">
            <svg
              className="w-4 h-4 mr-2 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2H9a2 2 0 00-2 2v4m0 0l-2 2m2-2l2 2m0-2h4m0-4h4m-9 8h4m-4 4h4"
              ></path>
            </svg>
            <span>
              Población: {city.properties.population.toLocaleString()}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CityCard;
