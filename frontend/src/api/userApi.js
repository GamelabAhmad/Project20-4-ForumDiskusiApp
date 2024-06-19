import axios from "axios";
import Cookies from "js-cookie";

export async function getUserProfile() {
  const token = Cookies.get("jwt");

  if (!token) {
    return null;
  }

  try {
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/profile/`,
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
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/profile/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUser(username, data) {
  const token = Cookies.get("jwt");

  try {
    const response = await axios({
      method: "put",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/setting/${username}`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}
