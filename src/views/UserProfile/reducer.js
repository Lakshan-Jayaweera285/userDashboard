import * as actionTypes from "./action";

const initialState ={
user: [
        // {   title: 'My new website',
        //     body: 'English may not be the most spoken language.An article is any member of a class of dedicated words that are used with noun phrases to mark the identifiability of the referents of the noun phrases. The category of articles constitutes a part of speech. In English, both "the" and "a/an" are articles, which combine with a noun to form a noun phrase.',
        //     author: 'mario'
        // }
    ],
    loading:false,
    addSuc:false
};

function userProfileReducer(state = initialState, action) {
   // console.log(action,"action")
    switch (action.type) {
        case actionTypes.GET_USER:
            return{...state, loading:true}
        case actionTypes.GET_USER_SUCCESS:
            return{...state, user:action.data, loading:false }
        case actionTypes.ADD_USER :
            return {...state, addSuc: false}
        case actionTypes.ADD_USER_SUCCESS :
            return {...state, addSuc: true}       
        default:
            
            return state            
    }
}
export default userProfileReducer;