import sendRequest from './send-request';
const BASE_URL = '/api/recipes';

export function addStep(recipeId, newStep) {
  return sendRequest(`${BASE_URL}/${recipeId}/steps`, 'POST', newStep);
}

export function deleteStep(recipeId, stepId) {
  return sendRequest(`${BASE_URL}/${recipeId}/steps/${stepId}`, 'DELETE');
}