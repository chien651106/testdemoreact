import axios from "../utils/axiosCustomize";

const postCreatNewUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.post("api/v1/participant", data);
};

const putUpdateUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);
  return axios.put("api/v1/participant", data);
};

const getAllusers = () => {
  return axios.get("/api/v1/participant/all");
};
const deleteUser = (userId) => {
  return axios.delete("/api/v1/participant", { data: { id: userId } });
};
const getUserWidthPaginate = (page, limit) => {
  return axios.get(`/api/v1/participant?page=${page}&limit=${limit}`);
};
const postlogin = (email, password) => {
  return axios.post("/api/v1/login", { email, password });
};
const postRegister = (email, password, user) => {
  return axios.post('/api/v1/register', { email, password, user });
};
const getQuizByUser = () => {
  return axios.get('/api/v1/quiz-by-participant');
};
export {
  postCreatNewUser,
  getQuizByUser,
  putUpdateUser,
  getAllusers,
  deleteUser,
  postlogin,
  postRegister,
  getUserWidthPaginate,
};
