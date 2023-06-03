import * as actionTypes from './action';

const initialState = {
  devices: [],
  loading: false,
  currentCycle1User: {},
  currentCycle2User: {},
};

function devicesListReducer(state = initialState, action) {
  //console.log(action,"action")
  switch (action.type) {
    case actionTypes.GET_DEVICES:
      return { ...state, loading: true };
    case actionTypes.GET_DEVICES_SUCCESS:
      return { ...state, devices: action.data, loading: false };
    case actionTypes.ADD_USER_TO_1:
      return { ...state, currentCycle1User: action.data, loading: false };
    case actionTypes.ADD_USER_TO_2:
      return { ...state, currentCycle2User: action.data, loading: false };
    default:
      return state;
  }
}
export default devicesListReducer;
