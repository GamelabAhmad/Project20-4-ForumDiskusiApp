import api from './baseApi';
import Cookies from 'js-cookie';

export async function getCommentsByPostId(id) {
  try {
    const response = await api.get(`/comments/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createCommentById(uuid, data) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.post(`/comment/${uuid}`, data, {
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

export async function updateCommentById(uuid, data) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.put(`/comment/${uuid}`, data, {
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

export async function deleteCommentById(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.delete(`/comment/${uuid}`, {
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