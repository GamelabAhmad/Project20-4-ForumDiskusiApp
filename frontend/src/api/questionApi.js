import axios from "axios";
import Cookies from "js-cookie";

export async function getQuestions() {
  try {
    const response = await axios({
      method: "get",
      url: "https://api-msib-6-forum-diskusi-04.educalab.id/questions",
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getQuestionsByUser() {
  const token = Cookies.get("jwt");

  try {
    const response = await axios({
      method: "get",
      url: "https://api-msib-6-forum-diskusi-04.educalab.id/questionByUser",
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

export async function getQuestionById(id) {
  try {
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/question/${id}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getQuestionByUser(uuid) {
  try {
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/questionByUser/${uuid}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getQuestionsByTopic(uuid) {
  try {
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/questionsByTopic/${uuid}`,
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getQuestionsByForum(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await axios({
      method: "get",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/questionsByForum/${uuid}`,
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

export async function createQuestion(data) {
  const token = Cookies.get("jwt");
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, data[key]);
  }

  try {
    const response = await axios({
      method: "post",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/question`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function createQuestionsByForum(uuid, data) {
  const token = Cookies.get("jwt");
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, data[key]);
  }

  try {
    const response = await axios({
      method: "post",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/questionsByForum/${uuid}`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function updateQuestion(id, data) {
  const token = Cookies.get("jwt");
  const formData = new FormData();

  for (const key in data) {
    formData.append(key, data[key]);
  }

  try {
    const response = await axios({
      method: "put",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/question/${id}`,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      data: formData,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteQuestion(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await axios({
      method: "delete",
      url: `https://api-msib-6-forum-diskusi-04.educalab.id/question/${uuid}`,
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
