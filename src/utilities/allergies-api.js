import sendRequest from './send-request';
const BASE_URL = '/api/allergies';

export function create(allergyData) {
  return sendRequest(BASE_URL, 'POST', allergyData);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function deleteAllergy(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}