// import got from 'got';

// const gameRoute = '/game';
// const serverUrl = 'http://localhost:1337';


// Update Game
export function updateGame(key, value) {
  let obj = {
    type: 'UPDATE_GAME',
    payload: {key, value}
  };
  console.log(obj);
  return obj;
}

// ***** Helper Functions *****

// function createNewGameAction(gameConfig) {
//   return {
//     type: 'CREATE_NEW_GAME',
//     payload: {
//       name: gameConfig.name
//     }
//   }
// }
