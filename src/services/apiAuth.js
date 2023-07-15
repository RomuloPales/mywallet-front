import axios from "axios";

const Base_URL = "http://localhost:5000";

function login(body) {
  const promise = axios.post(`${Base_URL}/sign-in`, body);
  return promise;
}

function signUp(body) {
  
  const promise = axios.post(`${Base_URL}/sign-up`, body);

  return promise;
}

const apiAuth = { login, signUp };

export default apiAuth;
