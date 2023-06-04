export const ADD_LIMITS = 'ADD_LIMITS';
export const ADD_LIMITS_SUCCESS = 'ADD_LIMITS_SUCCESS';

export const GET_LIMITS = 'GET_LIMITS';
export const GET_LIMITS_SUCCESS = 'GET_LIMITS_SUCCESS';

export const ADD_NOTIFICATIONS = "ADD_NOTIFICATIONS";

export function getAllLimits() {
  return { type: GET_LIMITS };
}

export function addNewLimits(data) {
  return { type: ADD_LIMITS, data };
}

export function addNotifications(data) {
  return {type: ADD_NOTIFICATIONS, data: data};
}