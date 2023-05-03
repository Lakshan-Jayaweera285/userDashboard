import * as actionTypes from "./action";

const initialState ={
cards: {data1: [], data2: []},
    loading:false,
    addSuc:false
};

function dashboardReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_CARDS:
            return{...state, loading:true}
        case actionTypes.GET_CARDS_SUCCESS:
            return{...state, cards: action.data, loading:false }     
        default:
            return state            
    }
}
export default dashboardReducer;