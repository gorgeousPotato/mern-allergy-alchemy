import sendRequest from './send-request';
const BASE_URL = '/api/items';

export function addItem(items) {
  return sendRequest(BASE_URL, 'POST', items);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

