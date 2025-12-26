import axios from "axios";
const BASE_URL = "https://text-editor-backend-5.onrender.com";

export const getDocuments = async () => {
  try {
    const userId = localStorage.getItem("fmd_user_id");

    const res = await axios.get(`${BASE_URL}/get-documents?userId=${userId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getDocument = async (id) => {
  try {
    const doc = await axios.get(`${BASE_URL}/get-document/${id}`);
    return doc;
  } catch (error) {}
};
export const createDocument = async (title, text) => {
  try {
    const userId = localStorage.getItem("fmd_user_id");

    const res = await axios.post(`${BASE_URL}/create-document`, {
      title,
      text,
      userId,
    });
    return res.data;
  } catch (error) {}
};
export const updateDocument = async (title, text, id) => {
  try {
    const res = await axios.put(`${BASE_URL}/edit-document/${id}`, {
      title,
      text,
    });
    return res.data;
  } catch (error) {}
};
export const deleteDocument = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/delete-document/${id}`);
    return res.data;
  } catch (error) {}
};

export const createVariable = async (key, value, userId) => {
  try {
    const userId = localStorage.getItem("fmd_user_id");

    const response = await axios.post(`${BASE_URL}/create-variable`, {
      key,
      value,
      userId,
    });
    return response.data;
  } catch (error) {}
};

export const getVariables = async () => {
  try {
    const userId = localStorage.getItem("fmd_user_id");

    const response = await axios.get(
      `${BASE_URL}/get-variables?userId=${userId}`
    );
    return response;
  } catch (error) {}
};

export const deleteVariable = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/delete-variable/${id}`);
    return response.data;
  } catch (error) {}
};

export const editVariable = async (key, value, id) => {
  try {
    const res = await axios.put(`${BASE_URL}/edit-variable/${id}`, {
      key,
      value,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchTitle = async (query, userId) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/search?q=${query}&userId=${userId}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (values) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, values);
    localStorage.setItem("fmd_user_id", response.data.userId);
    localStorage.setItem("fmd_user_email", response.data.email);
    localStorage.setItem("fmd_user_name", response.data.name);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (values) => {
  try {
    const payload = {
      name: values.userName,
      email: values.email,
      password: values.password,
    };
    const response = await axios.post(`${BASE_URL}/signup`, payload);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
