import { useState } from "react";

type Props = {
  setSearchValue: any;
  setUserSearch: any;
};

const SearchCityInput = ({ setSearchValue, setUserSearch }: Props) => {
  const [inputValue, setInputValue] = useState("");

  //AL EJECUTAR ESTO, SE ACTIVARA EL USEQUERY
  const onSearch = () => {
    setUserSearch(true);

    setSearchValue(inputValue);
  };

  return (
    <form className="flex">
      <input
        className="shadow-md p-2 flex-10 bg-white outline-0"
        placeholder="Type your city"
        onChange={(event: any) => {
          setInputValue(event.target.value);
        }}
      />
      <button
        className="bg-blue-500 shadow-md hover:bg-blue-300 rounded-tr-md rounded-br-md flex-1 transition-colors cursor-pointer text-white"
        onClick={onSearch}
      >
        Search
      </button>
    </form>
  );
};

export default SearchCityInput;
