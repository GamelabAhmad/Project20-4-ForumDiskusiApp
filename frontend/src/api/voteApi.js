import api from './baseApi';
import Cookies from 'js-cookie';

export async function voteQuestion(id) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.post(`/vote/${id}`, {}, {
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

export async function downVoteQuestion(id) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.post(`/downvote/${id}`, {}, {
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

export async function getVotes(id) {
  try {
    const response = await api.get(`/votes/${id}`, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}