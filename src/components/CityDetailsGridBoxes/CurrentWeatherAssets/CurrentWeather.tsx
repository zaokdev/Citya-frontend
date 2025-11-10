import Container from "../../../layout/Container";
import GridLayout from "../../../layout/GridLayout";
import {
  getOpenWeatherIcon,
  setCurrentWeatherMainBackgroundTheme,
} from "../../../utils/UIdata";
import CurrentWeatherMiniCard from "./CurrentWeatherMiniCard";

const CurrentWeather = ({ currentWeather, time }: any) => {
  return (
    <section
      className={`shadow-lg rounded-2xl pb-4 col-span-1 lg:col-span-7 px-6 ${
        time == "day" ? "text-black" : "text-white"
      } ${setCurrentWeatherMainBackgroundTheme(time)}`}
    >
      <GridLayout gridCols={12} cls="h-full">
        <div className="flex justify-center items-center lg:items-start flex-col col-span-12 text-center">
          <img
            src={getOpenWeatherIcon(currentWeather.weather[0].icon)}
            alt={currentWeather.weather[0].description}
          />
          <strong className="text-lg lg:text-6xl md:text-4xl sm:text-2xl">{`${currentWeather.main.temp}° C`}</strong>
          <p className="text-2xl mt-3">{currentWeather.weather[0].main}</p>
        </div>
        <GridLayout gridCols={12} cls="col-span-12">
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.feels_like}° C`}
            title="Feels Like"
            time={time}
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.humidity}%`}
            title="Humidity"
            time={time}
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.temp}° C`}
            title="Temp."
            time={time}
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.temp_min}° C`}
            title="Min. Temp."
            time={time}
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.temp_max}° C`}
            title="Max. Temp."
            time={time}
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.pressure} hPa`}
            title="Pressure"
            time={time}
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.sea_level || "N/A"} hPa`}
            title="Sea Level"
            time={time}
          />
          <CurrentWeatherMiniCard
            content={`${currentWeather.main.grnd_level || "N/A"} hPa`}
            title="Ground Level"
            time={time}
          />
        </GridLayout>
      </GridLayout>
    </section>
  );
};

export default CurrentWeather;
