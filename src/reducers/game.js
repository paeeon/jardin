export default function game(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_GAME':
      return {
        ...state,
        [action.payload.key]: action.payload.value
      }
    default:
      return state;
  }
}
