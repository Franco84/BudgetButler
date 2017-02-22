import {combineReducers} from 'redux'
import userReducer from './user-reducer'
import transactionReducer from './transaction-reducer'
import expensesReducer from './expenses-reducer'
import incomeReducer from './income-reducer'
import transactionsDateReducer from './transaction-date-reducer'

const rootReducer = combineReducers({
  currentUser: userReducer,
  transactions: transactionReducer,
  expenses: expensesReducer,
  income: incomeReducer
})

export default rootReducer
