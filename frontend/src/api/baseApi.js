import axios from "axios";

const api = axios.create({
  baseURL: "https://api-msib-6-forum-diskusi-04.educalab.id",
  withCredentials: true,
});

export default api;