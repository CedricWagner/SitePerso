import { API_URL } from "@/config";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: API_URL + "/api",
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.log("Une erreur est survenue : " + message);
  }
);
