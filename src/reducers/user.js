export default function user(state = {
  isFetching: false,
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
        isFetching: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
}
