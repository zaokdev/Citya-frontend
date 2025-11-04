import { useEffect, useState } from "react";
import SearchCityInput from "../components/SearchCityInput";
import DefaultLayout from "../layout/DefaultLayout";
import { useQuery } from "@tanstack/react-query";
import { searchFromQuery } from "../utils/fetchingCities";
import Container from "../layout/Container";
import SearchCityGrid from "../components/SearchCityGridBoxes/SearchCityGrid";

const IndexPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const { isLoading, isFetching, isSuccess, isError, data } = useQuery({
    queryKey: ["citySearch", searchValue],
    queryFn: () => searchFromQuery(searchValue),
    //NO SE ACTIVARA HASTA QUE SEARCHVALUE TENGA VALOR
    enabled: !!searchValue,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <section>
        <h1 className="text-3xl text-center mb-8">City locator</h1>
        <SearchCityInput setSearchValue={setSearchValue} />
      </section>
      <section>{data ? <SearchCityGrid data={data} /> : ""}</section>
    </>
  );
};

export default IndexPage;
