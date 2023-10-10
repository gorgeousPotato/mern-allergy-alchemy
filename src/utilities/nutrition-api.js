import sendRequest from './send-request';
const BASE_URL = '/api/recipes';

export function getRecipe(recipeId) {
  return sendRequest(`${BASE_URL}/${recipeId}/nutrition`, 'POST');
}

