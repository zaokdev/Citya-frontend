import React from "react";
import GridLayout from "../../layout/GridLayout";
import CityCard from "../CityCard";

const SearchCityGrid = ({ data }: any) => {
  return (
    <GridLayout MDgridCols={12} gridCols={1} cls="mt-12">
      {data.length == 0 && (
        <div className="md:col-span-12 text-center">No cities found.</div>
      )}
      {data.map((city: any) => (
        //CARDS

        <React.Fragment key={city.properties.place_id}>
          <CityCard city={city} />
        </React.Fragment>
      ))}
    </GridLayout>
  );
};

export default SearchCityGrid;
