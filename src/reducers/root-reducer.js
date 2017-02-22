import {combineReducers} from 'redux'
import userReducer from './user-reducer'
import transactionReducer from './transaction-reducer'
import expensesReducer from './expenses-reducer'
import incomeReducer from './income-reducer'
import changeMonth from './month-reducer'

const rootReducer = combineReducers({
  currentUser: userReducer,
  transactions: transactionReducer,
  expenses: expensesReducer,
  income: incomeReducer,
  month: changeMonth
})

export default rootReducer
