import axios from 'axios';

export const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

export const fetchGreetingRequest = () => {
  return {
    type: FETCH_GREETING_REQUEST
  }
}

export const fetchGreetingSuccess = (greeting) => {
  return {
    type: FETCH_GREETING_SUCCESS,
    payload: greeting
  }
}

export const fetchGreetingFailure = (error) => {
  return {
    type: FETCH_GREETING_FAILURE,
    payload: error
  }
}

export const fetchGreeting = () => {
  return (dispatch) => {
    dispatch(fetchGreetingRequest());
    axios.get('/api/greetings/random')
      .then(response => {
        const greeting = response.data;
        dispatch(fetchGreetingSuccess(greeting));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchGreetingFailure(errorMessage));
      })
  }
}
