import axios from "axios";
import Cookies from "js-cookie";

export async function joinForum(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await axios({
      method: "post",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/member/${uuid}`,
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
    const response = await axios({
      method: "delete",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/member/${uuid}`,
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
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/membership/${uuid}`,
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
