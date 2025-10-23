import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { searchFromQuery } from "../utils/fetchingCities";

type Props = {
  setSearchValue: any;
};

const SearchCityInput = ({ setSearchValue }: Props) => {
  const [inputValue, setInputValue] = useState("");

  //AL EJECUTAR ESTO, SE ACTIVARA EL USEQUERY
  const onSearch = () => {
    setSearchValue(inputValue);
  };

  return (
    <div className="border w-fit">
      <input
        placeholder="Type your city"
        onChange={(event: any) => {
          setInputValue(event.target.value);
          console.log(event.target.value);
        }}
      />
      <button className="bg-blue-500 hover:bg-blue-300" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchCityInput;
