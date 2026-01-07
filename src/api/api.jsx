import axiosInstance from "./axiosInstance";

export const getDocuments = async () => {
  const res = await axiosInstance.get("/get-documents");
  return res.data;
};

export const getDocument = async (id) => {
  const res = await axiosInstance.get(`/get-document/${id}`);
  return res.data;
};

export const createDocument = async (title, text) => {
  const res = await axiosInstance.post("/create-document", { title, text });
  return res.data;
};

export const updateDocument = async (title, text, id) => {
  const res = await axiosInstance.put(`/edit-document/${id}`, { title, text });
  return res.data;
};

export const deleteDocument = async (id) => {
  const res = await axiosInstance.delete(`/delete-document/${id}`);
  return res.data;
};

export const searchTitle = async (title) => {
  if (!title?.trim()) return "Please Enter the title";

  const res = await axiosInstance.get(`/search?q=${title}`);
  return res.data;
};
export const getVariables = async () => {
  const res = await axiosInstance.get("/get-variables");
  return res.data;
};

export const createVariable = async (key, value) => {
  const res = await axiosInstance.post("/create-variable", { key, value });
  return res.data;
};

export const editVariable = async (id, key, value) => {
  const res = await axiosInstance.put(`/edit-variable/${id}`, { key, value });
  console.log(res.data);
  return res.data;
};

export const deleteVariable = async (id) => {
  const res = await axiosInstance.delete(`/delete-variable/${id}`);
  return res.data;
};

export const login = async (values) => {
  const res = await axiosInstance.post("/login", values);

  localStorage.setItem("fmd_user_token", res.data.token);
  localStorage.setItem("fmd_user_id", res.data.userId);
  localStorage.setItem("fmd_user_name", res.data.name);
  localStorage.setItem("fmd_user_email", res.data.email);

  return res.data;
};

export const signup = async (values) => {
  return axiosInstance.post("/signup", {
    name: values.userName,
    email: values.email,
    password: values.password,
  });
};
export const logout = () => {
  localStorage.clear();
};
export const chatWithAI = async (message) => {
  const res = await axiosInstance.post("/ai", { message });
  console.log(res);
  return res.data.reply;
};
