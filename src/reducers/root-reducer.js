import {combineReducers} from 'redux'
import userReducer from './user-reducer'
import transactionReducer from './transaction-reducer'

const rootReducer = combineReducers({
  currentUser: userReducer,
  transactions: transactionReducer
})

export default rootReducer
