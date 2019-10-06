import { 
  SMURFS_START,
  GET_SMURFS_SUCCESS,
  SMURFS_FAILURE,
  POST_SMURFS_SUCCESS,
  UPDATE_SMURFS_SUCCESS,
} from '../actions';

const initialState = {
  smurfs: [],
  error: '',
  isFetching: false,
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SMURFS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        smurfs: action.payload
      }
    case POST_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        smurfs: [...state.smurfs, action.payload]
      }
    case UPDATE_SMURFS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
      }
    case SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    default: 
      return state;
  }
}