export const ADD_USER ='ADD_USER';
export const ADD_USER_SUCCESS ='ADD_USER_SUCCESS';

export const GET_USER ='GET_USER';
export const GET_USER_SUCCESS ='GET_USER_SUCCESS';


export function getUser() {
    return {type: GET_USER}
}

export function addNewUser(data) {
    return {type: ADD_USER, data}
}