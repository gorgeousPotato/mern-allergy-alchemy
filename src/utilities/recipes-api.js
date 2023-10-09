import sendRequest from './send-request';
const BASE_URL = '/api/recipes';

export function getCategories() {
  return sendRequest(`${BASE_URL}/new`);
}

export function addRecipe(newRecipe) {
  return sendRequest(BASE_URL, 'POST', newRecipe);
}

// export function addIngredient(newIngredient, recipeId) {
//   return sendRequest(`${BASE_URL}/${recipeId}/ingredients`, 'POST', newIngredient);
// }