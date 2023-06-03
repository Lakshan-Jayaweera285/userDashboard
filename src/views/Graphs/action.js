export const GET_CARDS = 'GetCards';
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS';

export function getAllCards() {
  return { type: GET_CARDS };
}
