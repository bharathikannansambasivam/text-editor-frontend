import axios from "axios";
import { useParams } from "react-router-dom";
const BASE_URL = "https://rich-text-editor-backend-ft3m.onrender.com";

export const getDocuments = async () => {
  try {
    const userId = localStorage.getItem("userId");

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
    const res = await axios.post(`${BASE_URL}/create-document`, {
      title,
      text,
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

export const createVariable = async (key, value) => {
  try {
    const response = await axios.post(`${BASE_URL}/create-variable`, {
      key,
      value,
    });
    return response.data;
  } catch (error) {}
};

export const getVariables = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/get-variables`);
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

export const searchTitle = async (query) => {
  try {
    const res = await axios.get(`${BASE_URL}/search?q=${query}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (values) => {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      values,
    });
    localStorage.setItem("userId", response.data.userId);
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (values) => {
  try {
    const response = await axios.post("http://localhost:3000/signup", {
      values,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
