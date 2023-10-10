import sendRequest from './send-request';
const BASE_URL = '/api/categories';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getRecipesByCat(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}