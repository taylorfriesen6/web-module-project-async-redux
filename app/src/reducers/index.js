import {FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from '../actions';

export const initialState = {
  data: 'test'
}

export const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        data: 'start'
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: 'success'
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state
      }
    default:
      return state;
  }
}