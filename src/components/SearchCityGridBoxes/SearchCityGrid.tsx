import React from "react";
import GridLayout from "../../layout/GridLayout";
import { Link } from "react-router";

const SearchCityGrid = ({ data }: any) => {
  return (
    <GridLayout MDgridCols={12} gridCols={1}>
      {data.map((city: any) => (
        //CARDS
        <Link
          to={{
            pathname: `city/${city.properties.place_id}`,
            search: `?lat=${city.properties.lat}&lon=${city.properties.lon}`,
          }}
          className="border h-12 md:col-span-4"
        >
          <img
            src={`/flags/4x3/${city.properties.country_code}.svg`}
            alt={city.properties.country_code}
            className="w-8"
          />
          {city.properties.city}
        </Link>
      ))}
    </GridLayout>
  );
};

export default SearchCityGrid;
