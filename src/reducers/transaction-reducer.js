export default (state=[], action) => {
  switch (action.type) {
    case "FETCH_TRANSACTIONS":
    console.log('fetching tranactions');
      return action.payload
//     case "FETCH_TRANSACTIONS":
//     console.log('fetching tranactions');
// //       return action.payload.data.???
    default:
      return state
  }
}
