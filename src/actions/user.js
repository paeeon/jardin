import got from 'got';

const serverUrl = 'http://localhost:1337';

// Create new user
export function createNewUser(user) {
  return got.post(`${serverUrl}/users/register`, {body: user})
    .then(function(response) {
      return response;
    }).catch(handleError)
}

// Log in user
export function loginUser(user) {
  return got.post(`${serverUrl}/users/login`, {body: user})
    .then((response) => {
      if (storageAvailable('localStorage')) {
        localStorage.setItem('jwt', response.body);
      }
    }).catch(handleError)
}

// Log out user
export function logoutUser(user) {
  return got.patch(`${serverUrl}/users/logout`, {body: user})
    .then((response) => {
      if (storageAvailable('localStorage')) {
        localStorage.removeItem('jwt');
      }
    }).catch(handleError)
}

// Check JWT Validity and Expiration
export function checkToken() {
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
        console.log(response.body);
        return response.body;
      }).catch(handleError);
  } else {
    console.log('No JWT to verify!');
  }
}

function logResponse(response) {
  console.log("Response in actions/user.js: ", response);
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
