import { axiosGet } from "./axios";

export const searchFromQuery = async (city: string) => {
  try {
    const response = await axiosGet(`/cities/search_cities?query=${city}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const cityInformation = async (lat: string, lon: string) => {
  try {
    const response = await axiosGet(
      `/cities/city_information?lat=${lat}&lon=${lon}&code=mx&units=metric`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
