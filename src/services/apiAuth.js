import axios from "axios";

const Base_URL = "http://localhost:5000";

function login(body) {
  const promise = axios.post(`${Base_URL}/sign-in`, body);
  return promise;
}

function cadastro(body) {
  const promise = axios.post(`${Base_URL}/sign-up`, body);
  return promise;
}

const apiAuth = { login, cadastro };

export default apiAuth;
