export default function user(state = {
  isFetching: true,
  isAuthenticated: false,
}, action) {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        firstName: action.payload.firstName,
        email: action.payload.email,
        id: action.payload.id,
        isAuthenticated: true
      };
    case 'LOG_OUT':
      return {
        ...state,
        isAuthenticated: false
      };
    case 'FETCH_AUTH_REQUEST':
      return {
        ...state,
        isFetching: true
      };
    case 'FETCH_AUTH_SUCCESS':
      return {
        ...state,
        isFetching: false
      }
    case 'FETCH_AUTH_FAIL':
      return {
        ...state,
        isFetching: false
      }
    default:
      return state;
  }
}
