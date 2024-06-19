import api from './baseApi';
import Cookies from 'js-cookie';

export async function getUserProfile() {
  const token = Cookies.get("jwt");

  if (!token) {
    return null;
  }

  try {
    const response = await api.get(`/profile/`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getUserByUsername(id) {
  try {
    const response = await api.get(`/profile/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(username, data) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.put(`/setting/${username}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}