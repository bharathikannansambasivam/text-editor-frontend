import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://text-editor-backend-5.onrender.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("fmd_user_token");

    // 🔥 more reliable check
    if (token && !config.url?.endsWith("/ai")) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete config.headers.Authorization; // 🔥 force remove
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
