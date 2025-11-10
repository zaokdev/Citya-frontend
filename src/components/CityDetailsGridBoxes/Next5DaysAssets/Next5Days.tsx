import GridLayout from "../../../layout/GridLayout";
import { getOpenWeatherIcon } from "../../../utils/UIdata";

const Next5Days = ({ weatherFiveDays }: any) => {
  return (
    <GridLayout
      cls="shadow-lg rounded-2xl lg:col-span-5 bg-slate-300 !gap-0 py-2 px-4"
      gridCols={2}
      gridRows={5}
    >
      {weatherFiveDays.map((weather: any) => (
        <>
          <div
            className="h-full border-b-2 border-slate-400 col-span-1 flex items-end justify-center flex-col"
            key={weather.dt_txt}
          >
            <span>{weather.week_day}</span>
            <span>{weather.dt_txt.split(" ")[1]}</span>
          </div>
          <div className="border-b-2 border-slate-400 col-span-1 flex flex-col items-start justify-center">
            <img
              src={getOpenWeatherIcon(weather.weather[0].icon)}
              className="h-18"
            />
          </div>
        </>
      ))}
    </GridLayout>
  );
};

export default Next5Days;
