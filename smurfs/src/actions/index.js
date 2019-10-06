import axios from 'axios';

export const SMURFS_START = 'SMURFS_START';
export const SMURFS_FAILURE = 'SMURFS_FAILURE';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';
export const UPDATE_SMURFS_SUCCESS = 'UPDATE_SMURFS_SUCCESS';

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

export const updateSmurf = (smurf, id) => dispatch => {
  console.log(smurf, id)
  dispatch({ type: SMURFS_START });
  axios
    .put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({ type: SMURFS_FAILURE, payload: err })
    })
}