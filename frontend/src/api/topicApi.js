import api from './baseApi';
import Cookies from 'js-cookie';

export async function getTopics() {
  try {
    const response = await api.get(`/topics`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getTopicById(id) {
  try {
    const response = await api.get(`/topic/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createTopic(data) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.post(`/topic`, data, {
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

export async function updateTopic(id, data) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.put(`/topic/${id}`, data, {
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

export async function deleteTopic(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.delete(`/topic/${uuid}`, {
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