import { axiosGet } from "./axios";

export const searchFromQuery = async (city: string) => {
  try {
    const response = await axiosGet(`/cities/search_cities?query=${city}`);
    return response.data;
  } catch (error) {
    console.log(`Error en axios: ${error}`);
    throw error;
  }
};
