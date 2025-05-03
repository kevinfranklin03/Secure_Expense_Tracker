import axios from 'axios';

const API_URL = 'http://44.203.183.171:8080/api/transactions';

const getAll = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const create = async (transaction) => {
  const response = await axios.post(API_URL, transaction);
  return response.data;
};

const deleteTransaction = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const transactionService = { getAll, create, delete: deleteTransaction };

export default transactionService;
