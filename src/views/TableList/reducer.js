import * as actionTypes from './action';

const initialState = {
  devices: [],
  loading: false,
};

function devicesListReducer(state = initialState, action) {
  //console.log(action,"action")
  switch (action.type) {
    case actionTypes.GET_DEVICES:
      return { ...state, loading: true };
    case actionTypes.GET_DEVICES_SUCCESS:
      return { ...state, devices: action.data, loading: false };
    default:
      return state;
  }
}
export default devicesListReducer;
