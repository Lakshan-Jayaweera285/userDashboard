import * as actionTypes from './action';

const initialState = {
  limits: [
    // {   title: 'My new website',
    //     body: 'English may not be the most spoken language.An article is any member of a class of dedicated words that are used with noun phrases to mark the identifiability of the referents of the noun phrases. The category of articles constitutes a part of speech. In English, both "the" and "a/an" are articles, which combine with a noun to form a noun phrase.',
    //     author: 'mario'
    // }
  ],
  loading: false,
  addSuc: false,
  notifications: [],
};

function settingsReducer(state = initialState, action) {
  console.log(action, 'action settings');
  switch (action.type) {
    case actionTypes.GET_LIMITS:
      return { ...state, loading: true };
    case actionTypes.GET_LIMITS_SUCCESS:
      return { ...state, limits: action.data, loading: false };
    case actionTypes.ADD_LIMITS:
      return { ...state, addSuc: false };
    case actionTypes.ADD_LIMITS_SUCCESS:
      return { ...state, addSuc: true };
    case actionTypes.ADD_NOTIFICATIONS:
      return { ...state, notifications: action.data };
    default:
      return state;
  }
}
export default settingsReducer;
