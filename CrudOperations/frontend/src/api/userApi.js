import axios from "axios";

const API= axios.create({baseURL:"http://localhost:5000"});

export const getUsers = () => API.get("/");
export const createUser = (user) => API.post("/", data);
export const updateUser = (id, user) => API.patch(`/${id}`, data);
export const deleteUser = (id) => API.delete(`/${id}`);