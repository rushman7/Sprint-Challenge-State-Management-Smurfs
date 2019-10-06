import axios from 'axios';

export const SMURFS_START = 'SMURFS_START';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const SMURFS_FAILURE = 'SMURFS_FAILURE';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';

export const getSmurfs = () => dispatch => {
  dispatch({ type: SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: SMURFS_FAILURE, payload: err })
    });
}

export const postSmurf = smurf => dispatch => {
  dispatch({ type: SMURFS_START });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: POST_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: SMURFS_FAILURE, payload: err })
    })
}