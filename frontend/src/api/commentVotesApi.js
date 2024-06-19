import api from './baseApi';
import Cookies from 'js-cookie';

export async function getCommentVotes(id) {
  try {
    const response = await api.get(`/likes/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function upVoteComment(id) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.post(`/like/${id}`, {}, {
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

export async function downVoteComment(id) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.post(`/unlike/${id}`, {}, {
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