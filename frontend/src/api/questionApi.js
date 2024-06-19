import api from './baseApi';
import Cookies from 'js-cookie';

export async function getQuestions() {
  try {
    const response = await api.get(`/questions`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getQuestionsByUser() {
  const token = Cookies.get("jwt");

  try {
    const response = await api.get(`/questionByUser`, {
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
    const response = await api.get(`/question/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getQuestionByUser(uuid) {
  try {
    const response = await api.get(`/questionByUser/${uuid}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getQuestionsByTopic(uuid) {
  try {
    const response = await api.get(`/questionsByTopic/${uuid}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getQuestionsByForum(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.get(`/questionsByForum/${uuid}`, {
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
    const response = await api.post(`/question`, formData, {
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
    const response = await api.post(`/questionsByForum/${uuid}`, formData, {
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
    const response = await api.put(`/question/${id}`, formData, {
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

export async function deleteQuestion(uuid) {
  const token = Cookies.get("jwt");

  try {
    const response = await api.delete(`/question/${uuid}`, {
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