export const GET_DEVICES = 'GET_DEVICES';
export const GET_DEVICES_SUCCESS = 'GET_DEVICES_SUCCESS';
export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const ADD_USER_TO_1 = 'ADD_USER_TO_1';
export const ADD_USER_TO_2 = 'ADD_USER_TO_2';

export function getAllDevices() {
  return { type: GET_DEVICES };
}

export function getAllUsers() {
  return { type: GET_USERS };
}

export function addUserToCycle(user, cycle) {
  if (cycle === '1') {
    return { type: ADD_USER_TO_1, data: user };
  } else if (cycle === '2') {
    return { type: ADD_USER_TO_2, data: user };
  }
}