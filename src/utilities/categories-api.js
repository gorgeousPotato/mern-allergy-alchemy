import sendRequest from './send-request';
const BASE_URL = '/api/categories';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getRecipesByCat(title) {
  return sendRequest(`${BASE_URL}/${title}`);
}