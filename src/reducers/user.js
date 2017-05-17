export default function user(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('jwt') ? true : false
}, action) {
  switch (action.type) {
    case 'CREATE_USER':

    default:
      return state;
  }
}
