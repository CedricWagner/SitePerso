import { API_URL } from "@/config";
import Axios from "axios";

export const axios = Axios.create({
  baseURL: API_URL + "/api",
  headers: {
    accept: "application/json",
  },
  withCredentials: true,
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    // eslint-disable-next-line no-console
    console.log("Une erreur est survenue : " + message);
  }
);
