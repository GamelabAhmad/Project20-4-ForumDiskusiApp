import api from './baseApi';
import Cookies from 'js-cookie';

export async function getForums() {
  try {
    const response = await api.get(`/forums`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getForumById(id) {
  try {
    const response = await api.get(`/forum/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createForum(data) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.post(`/forum`, data, {
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

export async function updateForum(id, data) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.put(`/forum/${id}`, data, {
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

export async function deleteForum(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.delete(`/forum/${uuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}