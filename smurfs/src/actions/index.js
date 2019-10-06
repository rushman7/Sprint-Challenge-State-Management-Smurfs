import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res.data)
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ 
        type: FETCH_SMURFS_FAILURE, 
        payload: err 
      })
    });
}