//URL de OpenWeather Icon
export const getOpenWeatherIcon = (icon: string) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

export const getCityFullName = (data: any) => {
  return { city: data.city, state: data.state, country: data.country };
};

export const getNightOrDay = (icon: string) => {
  return icon[2] == "d" ? "day" : "night";
};

const nightCurrentWeatherTheme = `bg-slate-800 text-white`;
const dayCurrentWeatherTheme = `bg-yellow-500 text-black`;

export const setTheme = (icon: string) => {
  return getNightOrDay(icon) == "day"
    ? dayCurrentWeatherTheme
    : nightCurrentWeatherTheme;
};
