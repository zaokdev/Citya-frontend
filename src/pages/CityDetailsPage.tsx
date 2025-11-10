import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { cityInformation } from "../utils/fetchingCities";
import GridLayout from "../layout/GridLayout";
import CurrentWeather from "../components/CityDetailsGridBoxes/CurrentWeatherAssets/CurrentWeather";
import {
  getCityFullName,
  getNightOrDay,
  setBackgroundTheme,
} from "../utils/UIdata";
import Next5Days from "../components/CityDetailsGridBoxes/Next5DaysAssets/Next5Days";
import CityMap from "../components/CityDetailsGridBoxes/CityMap/CityMap";
import LoadingScreen from "../layout/LoadingScreen";
import Container from "../layout/Container";

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

  const { isLoading, isError, data } = useQuery({
    queryKey: ["cityInfo", lat, lon],
    queryFn: () => cityInformation(lat ?? "", lon ?? ""),
  });

  type timeType = "day" | "night";
  const [time, setTime] = useState<timeType>("day");

  useEffect(() => {
    if (data) {
      setTime(getNightOrDay(data.current_weather.weather[0].icon));
    }
  }, [data]);

  if (isLoading) return <LoadingScreen />;
  if (isError) return <>Error</>;

  const { city, state, country } = getCityFullName(
    data.city_basic_information.features[0].properties
  );

  return (
    <>
      <div className={`${time && setBackgroundTheme(time)} py-4`}>
        <Container>
          <h1
            className={`text-3xl md:text-5xl  lg:text-6xl tracking-wide text-center mb-6 ${
              time == "day" ? "text-black" : "text-white"
            }`}
          >
            {
              [city, state, country] // 1. Crea un array
                .filter(Boolean) // 2. Filtra los valores "falsy" (undefined, null, "")
                .join(", ") // 3. Une lo que queda con ", "
            }
          </h1>
          <GridLayout gridCols={1} LGgridCols={12}>
            <CurrentWeather currentWeather={data.current_weather} time={time} />
            <Next5Days weatherFiveDays={data.weather_five_days} time={time} />
            <CityMap city_basic_information={data.city_basic_information} />
          </GridLayout>
        </Container>
      </div>
    </>
  );
};

export default CityDetailsPage;
