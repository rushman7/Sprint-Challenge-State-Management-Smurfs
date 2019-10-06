import { 
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
} from '../actions';

const initialState = {
  smurfs: [],
  error: '',
  isFetching: false,
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        smurfs: action.payload
      }
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default: 
      return state;
  }
}