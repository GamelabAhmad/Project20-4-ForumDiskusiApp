import axios from "axios";

const instance = axios.create({
  baseURL: "https://api-msib-6-forum-diskusi-04.educalab.id",
  withCredentials: true,
});

export const signIn = async (username, password) => {
  const response = await instance.post("/signin", {
    username,
    password,
  });
  return response.data;
};

export const signUp = async (username, email, password) => {
  const response = await instance.post("/signup", {
    username,
    email,
    password,
  });
  return response.data;
};
