export function createNewUser(user) {
  return {
    type: 'CREATE_USER',
    data: {
      user
    }
  }
}
