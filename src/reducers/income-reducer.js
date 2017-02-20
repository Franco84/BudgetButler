export default (state=[], action) => {
  switch (action.type) {
    case "FETCH_INCOME":
      return action.payload
    case "CREATE_INCOME":
        return action.payload
    case "LOGOUT_USER":
      return action.payload
    case "UPDATE_INCOME":
      return action.payload
    case "DELETE_INCOME":
      return action.payload
    default:
      return state
  }
}
