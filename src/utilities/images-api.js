import sendRequest from './send-request';
const BASE_URL = '/api/recipes';

export function getAll(recipeId) {
  return sendRequest(`${BASE_URL}/${recipeId}/images`);
}

export function upload(formData, recipeId) {
  return sendRequest(`${BASE_URL}/${recipeId}/images`, 'POST', formData, true);
}