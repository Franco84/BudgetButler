export default (state=[], action) => {
  switch (action.type) {
    case "FETCH_EXPENSES":
      return action.payload
    case "LOGOUT_USER":
      return action.payload
    case "UPDATE_EXPENSES":
      return action.payload
    case "DELETE_EXPENSES":
      return action.payload
    case "CREATE_EXPENSE":
      return action.payload
    default:
      return state
  }
}
