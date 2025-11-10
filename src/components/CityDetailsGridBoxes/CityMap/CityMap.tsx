import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngExpression } from "leaflet";
const CityMap = ({ city_basic_information }: any) => {
  if (
    city_basic_information.query.lat === undefined ||
    city_basic_information.query.lat === undefined
  ) {
    return <>Loading...</>;
  }

  const position: LatLngExpression = [
    city_basic_information.query.lat,
    city_basic_information.query.lon,
  ];

  return (
    <section className="col-span-1 lg:col-span-12 h-[500px]">
      <MapContainer
        center={position}
        zoom={12}
        minZoom={8}
        bounceAtZoomLimits
        scrollWheelZoom={false}
        className="h-[500px] rounded-2xl brightness-75"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </section>
  );
};

export default CityMap;
