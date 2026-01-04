import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://text-editor-backend-5.onrender.com",
});
console.log(import.meta.env.VITE_BASE_URL);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("fmd_user_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
