import axios from "axios";
import Cookies from "js-cookie";

export async function getCommentsByPostId(id) {
  try {
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/comments/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createCommentById(uuid, data) {
  const token = Cookies.get("jwt");

  try {
    const response = await axios({
      method: "post",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/comment/${uuid}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateCommentById(uuid, data) {
  const token = Cookies.get("jwt");

  try {
    const response = await axios({
      method: "put",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/comment/${uuid}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteCommentById(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await axios({
      method: "delete",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/comment/${uuid}`,
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
