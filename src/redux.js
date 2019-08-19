// get
const API_CALL_REQUEST = "API_CALL_REQUEST";
// good
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
// bad
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
  // loading
  fetching: false,
  // data
  dog: null,
  // err
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      //test
      console.log('re', 'request');
      return { ...state, fetching: true, error: null };
    case API_CALL_SUCCESS:
      // no laoding, data
      //test
      console.log('re', 'request done');
      return { ...state, fetching: false, dog: action.dog };
    case API_CALL_FAILURE:
      // err
      return { ...state, fetching: false, dog: null, error: action.error };
      // default
    default:
      return state;
  }
}