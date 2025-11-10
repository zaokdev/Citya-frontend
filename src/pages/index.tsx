import { useState } from "react";
import SearchCityInput from "../components/SearchCityComponents/SearchCityInput";
import { useQuery } from "@tanstack/react-query";
import { searchFromQuery } from "../utils/fetchingCities";
import Container from "../layout/Container";
import SearchCityGrid from "../components/SearchCityComponents/SearchCityGrid";
import LoadingScreen from "../layout/LoadingScreen";

const IndexPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [userSearch, setUserSearch] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["citySearch", searchValue],
    queryFn: () => searchFromQuery(searchValue),
    //NO SE ACTIVARA HASTA QUE SEARCHVALUE TENGA VALOR
    enabled: !!searchValue,
  });

  if (isLoading) return <LoadingScreen text="Searching cities..." />;

  return (
    <section
      className={`bg-slate-100 flex ${
        userSearch ? "items-start" : "items-center"
      } justify-center py-4`}
    >
      <Container>
        <div>
          <div className={`text-center mb-8 ${userSearch ? "mt-12" : "mt-0"} `}>
            <h1 className="text-3xl">City explorer</h1>
            <p className="mt-2">Find weather information in real time</p>
          </div>
          <SearchCityInput
            setSearchValue={setSearchValue}
            setUserSearch={setUserSearch}
          />
        </div>
        <div>{data ? <SearchCityGrid data={data} /> : ""}</div>
      </Container>
    </section>
  );
};

export default IndexPage;
