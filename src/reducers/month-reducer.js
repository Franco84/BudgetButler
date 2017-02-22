export default (state=[], action) => {
  switch (action.type) {
    case "CHANGE_MONTH":
      return action.payload
    default:
      return state
  }
}