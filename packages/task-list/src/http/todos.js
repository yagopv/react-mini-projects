import axios from 'axios';

const BASE_URL = 'https://5dda901c5730550014fe78e2.mockapi.io/api/v1';

export function getTodos() {
  return axios.get(`${BASE_URL}/todo`);
}

export function addTodo(todo) {
  return axios.post(`${BASE_URL}/todo`, todo);
}

export function removeTodo(id) {
  return axios.delete(`${BASE_URL}/todo/${id}`);
}

export function updateTodo(id, todo) {
  return axios.put(`${BASE_URL}/todo/${id}`, todo);
}
