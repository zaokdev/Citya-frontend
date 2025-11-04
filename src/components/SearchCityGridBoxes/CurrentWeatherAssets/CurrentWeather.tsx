import Container from "../../../layout/Container";
import GridLayout from "../../../layout/GridLayout";
import { getOpenWeatherIcon, setTheme } from "../../../utils/UIdata";
import CurrentWeatherMiniCard from "./CurrentWeatherMiniCard";

const CurrentWeather = ({ currentWeather }: any) => {
  return (
    <section
      className={`col-span-1 lg:col-span-7 ${setTheme(
        currentWeather.weather[0].icon
      )} pb-8 px-6`}
    >
      <GridLayout gridCols={12}>
        <div className="flex justify-center items-center flex-col col-span-12 text-center">
          <img
            src={getOpenWeatherIcon(currentWeather.weather[0].icon)}
            alt={currentWeather.weather[0].description}
          />
          <strong className="text-lg md:text-2xl">{`${currentWeather.main.temp}° C`}</strong>
          <p>
            {currentWeather.weather[0].main}
            <br />
            {currentWeather.weather[0].description}
          </p>
        </div>
        <GridLayout gridCols={12} cls="col-span-12">
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.feels_like}° C`}
            title="Feels Like"
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.humidity}%`}
            title="Humidity"
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.temp}° C`}
            title="Temp."
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.temp_min}° C`}
            title="Min. Temp."
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.temp_max}° C`}
            title="Max. Temp."
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.pressure} hPa`}
            title="Pressure"
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.sea_level || "N/A"} hPa`}
            title="Sea Level"
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.grnd_level || "N/A"} hPa`}
            title="Ground Level"
          />
        </GridLayout>
      </GridLayout>
    </section>
  );
};

export default CurrentWeather;
