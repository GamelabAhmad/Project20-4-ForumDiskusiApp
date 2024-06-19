import axios from "axios";

const api = axios.create({
  baseURL: "https://api-msib-6-forum-diskusi-04.educalab.id",
  withCredentials: true,
});
api.interceptors.response.use(
  (response) => {
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    if (response.data.user && response.data.user.username) {
      localStorage.setItem('username', response.data.user.username);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;