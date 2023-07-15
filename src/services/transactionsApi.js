import axios from "axios";

const Base_URL = "http://localhost:5000/transactions";

  function createConfig(token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

function getTransactions(token) {
  const promise = axios.get(Base_URL, createConfig(token));
    return promise; 
}   

  function postTransactions(body, token) {
      
  const promise = axios.post(Base_URL, body, createConfig(token));
    return promise;
  }

const transactionsApi = { getTransactions, postTransactions };

export default transactionsApi;
