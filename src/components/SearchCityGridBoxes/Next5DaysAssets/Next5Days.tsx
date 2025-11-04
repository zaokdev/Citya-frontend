import GridLayout from "../../../layout/GridLayout";
import { getOpenWeatherIcon } from "../../../utils/UIdata";

const Next5Days = ({ weatherFiveDays }: any) => {
  console.log(weatherFiveDays);
  return (
    <GridLayout
      cls="lg:col-span-5 bg-red-300 !gap-0 py-8 px-4"
      gridCols={2}
      gridRows={5}
    >
      {weatherFiveDays.map((weather: any) => (
        <>
          <div className="h-full border-b-2 col-span-1 flex items-center justify-center flex-col">
            <span>{weather.week_day}</span>
            <span>{weather.dt_txt.split(" ")[1]}</span>
          </div>
          <div className="border-b-2 col-span-1 flex flex-col items-center pb-2">
            <img
              src={getOpenWeatherIcon(weather.weather[0].icon)}
              className="h-18"
            />
            <span>{weather.weather[0].main}</span>
          </div>
        </>
      ))}
    </GridLayout>
  );
};

export default Next5Days;
