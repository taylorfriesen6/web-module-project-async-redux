import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions';



export const initialState = {
  person: null,
  isFetching: false,
  didFail: false
}

export const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        person: null,
        isFetching: true,
        didFail: false
      };
    case FETCH_DATA_SUCCESS:
      return {
        person: action.payload,
        isFetching: false,
        didFail: false
      };
    case FETCH_DATA_FAILURE:
      return {
        person: null,
        isFetching: false,
        didFail: true
      }
    default:
      return state;
  }
}