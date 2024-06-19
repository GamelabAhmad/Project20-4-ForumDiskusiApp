import axios from "axios";
import Cookies from "js-cookie";

export async function getFollowersUser(uuid) {
  try {
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/followers/${uuid}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getFollowingUser(uuid) {
  try {
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/following/${uuid}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function followUser(id) {
  const token = Cookies.get("jwt");

  try {
    const response = await axios({
      method: "post",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/follow/${id}`,
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
    const response = await axios({
      method: "delete",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/unfollow/${id}`,
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
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/isFollowed/${id}`,
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
