export const ADD_LIMITS ='ADD_LIMITS';
export const ADD_LIMITS_SUCCESS ='ADD_LIMITS_SUCCESS';

export const GET_LIMITS ='GET_LIMITS';
export const GET_LIMITS_SUCCESS ='GET_LIMITS_SUCCESS';


export function getAllLimits() {
    return {type: GET_LIMITS}
}

export function addNewLimits(data) {
    return {type: ADD_LIMITS, data}
}