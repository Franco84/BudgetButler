export default (state=[], action) => {
  switch (action.type) {
    case "FETCH_TRANSACTIONS":
      return action.payload
    case "CREATE_TRANSACTION":
        console.log('fetching tranactions');
        return action.payload
    default: 
      return state
  }
}
