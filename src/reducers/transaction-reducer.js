export default (state=[], action) => {
  switch (action.type) {
    case "FETCH_TRANSACTIONS":
      return action.payload
    case "CREATE_TRANSACTION":
        return action.payload
    case "LOGOUT_USER":
      return action.payload
    default:
      return state
  }
}
