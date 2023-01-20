import axios from "axios";

const instance = axios.create({
  baseURL: "https://azapp-playground-demo-api.azurewebsites.net/api",
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/Accounts/LoginWithCod" && originalConfig.url !== "/Accounts/GeneratePassword" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post("/Accounts/RefreshToken", {
            token: localStorage.getItem("tokent"),
            refreshToken: localStorage.getItem("refreshtoken"),
          });
          const { token, refreshToken } = rs.data;
          localStorage.setItem(token);
          localStorage.setItem(refreshToken);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default instance;
