import { setCurrentWeatherMiniCardBackgroundTheme } from "../../../utils/UIdata";

type props = {
  title: string;
  content: string;
  time: any;
};

const CurrentWeatherMiniCard = ({ title, content, time }: props) => {
  return (
    <div
      className={`text-center p-2 rounded-lg transition-colors col-span-6 md:col-span-4 ${setCurrentWeatherMiniCardBackgroundTheme(
        time
      )}`}
    >
      <strong>{title}</strong>
      <p>{content}</p>
    </div>
  );
};

export default CurrentWeatherMiniCard;
