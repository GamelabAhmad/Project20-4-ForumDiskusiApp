import api from './baseApi';
import Cookies from 'js-cookie';

export async function getFollowersUser(uuid) {
  try {
    const response = await api.get(`/followers/${uuid}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getFollowingUser(uuid) {
  try {
    const response = await api.get(`/following/${uuid}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function followUser(id) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.post(`/follow/${id}`, {}, {
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

export async function unfollowUser(id) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.delete(`/unfollow/${id}`, {
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

export async function isUserFollowed(id) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.get(`/isFollowed/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.isFollowed;
  } catch (error) {
    throw error;
  }
}