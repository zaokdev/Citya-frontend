import axios from "axios";
import { BACKEND_URL } from "./dotenv";
export const axiosGet = async (url: string) => {
  return axios.get(`${BACKEND_URL}${url}`);
};
