import axios from "axios";

const api = axios.create({
  baseURL: "https://api-msib-6-forum-diskusi-04.educalab.id",
  withCredentials: true,
});
api.interceptors.response.use(
  (response) => {
    const setCookieHeader = response.headers['set-cookie'];
    if (setCookieHeader) {
      const tokenCookie = setCookieHeader.find(cookie => cookie.startsWith('token='));
      if (tokenCookie) {
        const tokenValue = tokenCookie.split(';')[0].split('=')[1];
        localStorage.setItem('token', tokenValue);
      }
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;