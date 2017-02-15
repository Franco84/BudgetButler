export default (state=[], action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return action.payload.data.name
    case 'AUTHENTICATE_USER':
      return action.payload
    case 'LOGOUT_USER':
      return action.payload
    default:
      return state
  }
}
