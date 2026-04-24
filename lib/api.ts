import axios from "axios";

const API_ENTRYPOINT = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const api = axios.create({
  baseURL: API_ENTRYPOINT,
  headers: {
    Accept: "application/json",
  },
});

export const baseApi = axios.create({
  baseURL: "/api",
});
