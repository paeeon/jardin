import jwtDecode from 'jwt-decode';

export function checkLoggedIn() {
  let token = localStorage.getItem('jwt');
  if (token) {
    // TO DO: decoding first right now, still need to verify
    token = jwtDecode(token);
    console.log('decoded token', token);
  }
}
