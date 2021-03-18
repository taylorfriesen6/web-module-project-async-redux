import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => dispatch => {
  dispatch({type: FETCH_DATA_START});
  axios.get('https://randomuser.me/api/').then(res => {
    dispatch({type: FETCH_DATA_SUCCESS, payload: res.data.results[0]});
  }).catch(err => {
    dispatch({type: FETCH_DATA_FAILURE});
  })
}