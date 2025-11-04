import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { cityInformation } from "../utils/fetchingCities";
import GridLayout from "../layout/GridLayout";
import CurrentWeather from "../components/SearchCityGridBoxes/CurrentWeatherAssets/CurrentWeather";
import { getCityFullName } from "../utils/UIdata";
import Next5Days from "../components/SearchCityGridBoxes/Next5DaysAssets/Next5Days";

const CityDetailsPage = () => {
  const [params] = useSearchParams();
  const lat = params.get("lat");
  const lon = params.get("lon");
  let nav = useNavigate();

  useEffect(() => {
    if (!lat || !lon) {
      nav("/");
    }
  }, []);

  const { isLoading, data } = useQuery({
    queryKey: ["cityInfo", lat, lon],
    queryFn: () => cityInformation(lat ?? "", lon ?? ""),
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (isLoading) return <>Loading</>;

  const { city, state, country } = getCityFullName(
    data.city_basic_information.features[0].properties
  );

  return (
    <>
      <div className="mt-4">
        <h1 className="text-3xl text-center mb-6 ">{`${city && city}, ${
          state && state
        }, ${country && country}`}</h1>
        <GridLayout gridCols={1} LGgridCols={12}>
          <CurrentWeather currentWeather={data.current_weather} />
          <Next5Days weatherFiveDays={data.weather_five_days} />
          <section className="bg-yellow-500 border">3</section>
          <section className="border bg-green-400">4</section>
        </GridLayout>
      </div>
    </>
  );
};

export default CityDetailsPage;
