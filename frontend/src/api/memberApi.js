import api from './baseApi';
import Cookies from 'js-cookie';

export async function joinForum(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.post(`/member/${uuid}`, {}, {
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

export async function leaveForum(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.delete(`/member/${uuid}`, {
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

export async function userMemberForum(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.get(`/membership/${uuid}`, {
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