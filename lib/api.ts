import axios from "axios";

const api = axios.create({
   baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// global language state (outside React)
let currentLanguage: "en" | "fa" = "en";

// called from context
export const setApiLanguage = (lang: "en" | "fa") => {
  currentLanguage = lang;
};

// request interceptor
api.interceptors.request.use((config) => {
  config.headers = config.headers || {};

  config.headers["Accept-Language"] = currentLanguage;

  return config;
});

export default api;