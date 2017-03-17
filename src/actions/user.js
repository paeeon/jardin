import got from 'got';

const serverUrl = 'http://localhost:1337';

export function createNewUser(user) {
  return got.post(`${serverUrl}/users/register`, {body: user})
    .then(function(response) {
      return response;
    }).catch(handleError)
}

export function loginUser(user) {
  return got.post(`${serverUrl}/users/login`, {body: user})
    .then((response) => {
      if (storageAvailable('localStorage')) {
        localStorage.setItem('jwt', response.body);
      }
    }).catch(handleError)
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
