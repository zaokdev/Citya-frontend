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
    <div className="flex">
      <input
        className="border p-2 flex-10"
        placeholder="Type your city"
        onChange={(event: any) => {
          setInputValue(event.target.value);
          console.log(event.target.value);
        }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-300 rounded-tr-md rounded-br-md flex-1"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchCityInput;
