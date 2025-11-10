//URL de OpenWeather Icon
export const getOpenWeatherIcon = (icon: string) =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;

export const getCityFullName = (data: any) => {
  return { city: data.city, state: data.state, country: data.country };
};

export const getNightOrDay = (icon: string) => {
  return icon[2] == "d" ? "day" : "night";
};

//MAIN BACKGROUND THEME
const mainBackgroundDayTheme = `bg-slate-100`;
const mainBackgroundNightTheme = `bg-slate-800`;

export const setBackgroundTheme = (icon: string) => {
  try {
    if (icon != "day" && icon != "night") {
      icon = getNightOrDay(icon);
    }

    return icon == "day" ? mainBackgroundDayTheme : mainBackgroundNightTheme;
  } catch (e) {
    console.error(e);
    throw new Error("Error en la funcion setTheme");
  }
};

//CURRENT WEATHER MAIN BACKGROUND
const currentWeatherMainBackgroundDayTheme = `bg-white`;
const currentWeatherMainBackgroundNightTheme = `bg-slate-900`;

export const setCurrentWeatherMainBackgroundTheme = (icon: string) => {
  try {
    if (icon != "day" && icon != "night") {
      icon = getNightOrDay(icon);
    }

    return icon == "day"
      ? currentWeatherMainBackgroundDayTheme
      : currentWeatherMainBackgroundNightTheme;
  } catch (e) {
    console.error(e);
    throw new Error("Error en la funcion setTheme");
  }
};

//CURRENT WEATHER MINI CARD BACKGROUND THEME
const currentWeatherMiniCardBackgroundDayTheme = `bg-slate-100`;
const currentWeatherMiniCardBackgroundNightTheme = `bg-slate-800`;

export const setCurrentWeatherMiniCardBackgroundTheme = (icon: string) => {
  try {
    if (icon != "day" && icon != "night") {
      icon = getNightOrDay(icon);
    }

    return icon == "day"
      ? currentWeatherMiniCardBackgroundDayTheme
      : currentWeatherMiniCardBackgroundNightTheme;
  } catch (e) {
    console.error(e);
    throw new Error("Error en la funcion setTheme");
  }
};
