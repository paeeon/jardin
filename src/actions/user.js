import got from 'got';
import jwtDecode from 'jwt-decode';

const serverUrl = 'http://localhost:1337';

// Create new user
export function createNewUser(user) {
  return got.post(`${serverUrl}/users/register`, {body: user})
    .then(function(response) {
      return response;
    }).catch(handleError)
}

// Log in user Thunk
export function loginUserThunk(user) {
  console.log("Here is the user:");
  console.log(user);
  return dispatch => {
    return got.post(`${serverUrl}/users/login`, {body: user})
      .then(response => {
        let jwt = response.body;
        if (storageAvailable('localStorage')) localStorage.setItem('jwt', jwt);
        dispatch(loginUserAction(decodeJwt(jwt)));
      }).catch(handleError);
  };
}

// Log out user Thunk
export function logoutUserThunk() {
  return (dispatch, getState) => {
    return got.patch(`${serverUrl}/users/logout/${getState().user.id}`)
      .then((response) => {
        if (storageAvailable('localStorage')) localStorage.removeItem('jwt');
        dispatch(logoutUserAction());
      }).catch(handleError);
  };
}

// Check JWT Validity and Expiration
// decode token and then check if token is still valid and unexpired
// if token is valid and unexpired, continue loading page
// if token is invalid, redirect to login page
export function checkTokenThunk() {
  return dispatch => {
    let token = localStorage.getItem('jwt');
    console.log('here\'s the token:', token);
    console.log(`here's the URL we're sending the token to: `, `${serverUrl}/users/verify`)
    if (token) {
      return got.get(`${serverUrl}/users/verify`, {
        headers: {
          'Access-Control-Request-Method': 'GET',
          'Access-Control-Request-Headers': 'Authorization',
          'Authorization': `Bearer ${token}`,
        }
      }).then(function(response) {
          console.log(`Results of JWT check:`);
          console.log(response.statusCode, response.statusMessage);
          console.log(`Full response: `, response);
          if (response.statusCode === 400) return response;
          // If you make it here, that means that the user is logged in
          // Save the users' info on Redux
          dispatch(loginUserAction(decodeJwt(token)));
          return response;
        }).catch(handleError);
    } else {
      // there's no token!
      console.log('No JWT to verify!');
      return Promise.resolve({statusCode: 400});
    }
  }
}

// ***** Helper Functions *****

function loginUserAction(decodedJwt) {
  return {
    type: 'LOG_IN',
    payload: {
      firstName: decodedJwt.firstName,
      email: decodedJwt.email,
      id: decodedJwt.id
    }
  }
}

function logoutUserAction() {
  return {
    type: 'LOG_OUT'
  }
}

function decodeJwt(jwt) {
  const decodedJwt = jwtDecode(jwt);
  console.log('Decoded JWT', decodedJwt);
  return decodedJwt;
}

function handleError(error) {
  console.error('error happened in actions/user.js: ', error);
}

function storageAvailable(type) {
  try {
    var storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}
