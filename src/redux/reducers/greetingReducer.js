import {
  FETCH_GREETING_REQUEST,
  FETCH_GREETING_SUCCESS,
  FETCH_GREETING_FAILURE
} from '..actions/greetingAction';

const initialState = {
  greeting: '',
  error: ''
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_REQUEST:
      return {
        ...state,
        greeting: '',
        error: ''
      };
    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        greeting: action.payload,
        error: ''
      };
    case FETCH_GREETING_FAILURE:
      return {
        ...state,
        greeting: '',
        error: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
