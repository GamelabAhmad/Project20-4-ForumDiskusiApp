import api from './baseApi';

export const signIn = async (username, password) => {
  const response = await api.post("/signin", {
    username,
    password,
  });
  return response.data;
};

export const signUp = async (username, email, password) => {
  const response = await api.post("/signup", {
    username,
    email,
    password,
  });
  return response.data;
};