import {combineReducers} from 'redux'
import userReducer from './user-reducer'
import transactionReducer from './transaction-reducer'

const rootReducer = combineReducers({
  users: userReducer,
  transactions: transactionReducer
})

export default rootReducer
