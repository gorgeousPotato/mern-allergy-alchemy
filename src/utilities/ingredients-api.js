import sendRequest from './send-request';
const BASE_URL = '/api/recipes';

export function addIngredient(recipeId, newIngredient) {
  return sendRequest(`${BASE_URL}/${recipeId}/ingredients`, 'POST', newIngredient);
}

export function deleteIngredient(recipeId, ingredientId) {
  return sendRequest(`${BASE_URL}/${recipeId}/ingredients/${ingredientId}`, 'DELETE');
}