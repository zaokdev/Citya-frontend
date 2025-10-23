import { useEffect, useState } from "react";
import SearchCityInput from "../components/SearchCityInput";
import DefaultLayout from "../layout/DefaultLayout";
import { useQuery } from "@tanstack/react-query";
import { searchFromQuery } from "../utils/fetchingCities";

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
    <DefaultLayout>
      <SearchCityInput setSearchValue={setSearchValue} />
      {isLoading && <div>cargando...</div>}
      {data && <div>{data[0].type}</div>}
    </DefaultLayout>
  );
};

export default IndexPage;
