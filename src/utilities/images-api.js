import sendRequest from './send-request';
const BASE_URL = '/api/recipes';

export function addImg(formData, recipeId) {
  return sendRequest(`${BASE_URL}/${recipeId}/images`, 'POST', formData, true);
}