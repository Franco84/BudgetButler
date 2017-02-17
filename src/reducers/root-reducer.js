import {combineReducers} from 'redux'
import userReducer from './user-reducer'
import transactionReducer from './transaction-reducer'
import expensesReducer from './expenses-reducer'

const rootReducer = combineReducers({
  currentUser: userReducer,
  transactions: transactionReducer,
  expenses: expensesReducer
})

export default rootReducer
