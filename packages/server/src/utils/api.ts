import axios from "axios";

export const api = axios.create({
  method: "GET",
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "4a9bff4be3msh772a8da00e425b1p189e81jsn41f3580d7df7",
  },
});
