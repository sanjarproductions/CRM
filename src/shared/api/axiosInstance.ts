import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://213.171.12.144/crm-api/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const url = error.config?.url;
    const isAuthRequest = url === "/auth/login" || url === "/auth/register";
    if (error.response?.status === 401 && !isAuthRequest) {
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
