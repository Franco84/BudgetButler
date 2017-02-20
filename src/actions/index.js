import axios from 'axios'
import {browserHistory} from 'react-router'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const fetchTransactions = (callback) => {
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.get(URL + 'transactions').then((transactionData) => {
    callback(transactionData.data)
    return transactionData.data
  })

  return {
    type: 'FETCH_TRANSACTIONS',
    payload: response
  }
}

export const createTransaction = (transaction) => {
  const response = axios.post('/transactions', {transaction}).then((transactionData) => {
  return transactionData.data
  })

  return {
    type: 'CREATE_TRANSACTION',
    payload: response
  }
}

export const updateTransaction = (transaction) => {
  const response = axios.patch(`/transactions/${transaction.id}`, {transaction}).then((transactionData) => {
  return transactionData.data
  })

  return {
    type: 'UPDATE_TRANSACTION',
    payload: response
  }
}

export const deleteTransaction = (transaction) => {
  const response = axios.delete(`/transactions/${transaction.id}`, {transaction}).then((transactionData) => {
  return transactionData.data
  })

  return {
    type: 'DELETE_TRANSACTION',
    payload: response
  }
}

export const fetchIncome = () => {
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.get(URL + 'incomes').then((incomeData) => {
    return incomeData.data
  })

  return {
    type: 'FETCH_INCOME',
    payload: response
  }
}

export const createIncome = (income) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  let headers = sessionStorage.getItem('jwt');
  const response = axios.post(URL + 'incomes', {income}).then((incomeData) => {
    return incomeData.data
  })

  return {
    type: 'CREATE_INCOME',
    payload: response
  }
}

export const updateIncome = (income) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.patch(URL + `incomes/${income.id}`, {income}).then((incomeData) => {
    return incomeData.data
  })
  return {
    type: 'UPDATE_INCOME',
    payload: response
  }
}

export const deleteIncome = (income) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.delete(URL + `incomes/${income.id}`, {income}).then((incomeData) => {
    return incomeData.data
  })
  return {
    type: 'DELETE_INCOME',
    payload: response
  }
}


export const fetchExpenses = () => {
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.get(URL + 'expenses').then((expensesData) => {
    return expensesData.data
  })

  return {
    type: 'FETCH_EXPENSES',
    payload: response
  }
}

export const createExpense = (expense) => {
  const response = axios.post('/expenses', {expense}).then((expenseData) => {
  return expenseData.data
  })

  return {
    type: 'CREATE_EXPENSE',
    payload: response
  }
}

export const updateExpenses = (expense) => {
  const response = axios.patch(`/expenses/${expense.id}`, {expense}).then((expensesData) => {
  return expensesData.data
  })

  return {
    type: 'UPDATE_EXPENSES',
    payload: response
  }
}

export const deleteExpenses = (expense) => {
  const response = axios.delete(`/expenses/${expense.id}`, {expense}).then((expensesData) => {
    return expensesData.data
  })

  return {
    type: 'DELETE_EXPENSES',
    payload: response
  }
}

export const createUser = (user) => {
  const response = axios.post('/signup', user).then((userData) => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    sessionStorage.setItem("name", userData.data.name)
    axios.defaults.headers.common['AUTHORIZATION'] = userData.data.jwt
    browserHistory.push('/login')
    return userData
  })

  return {
    type: 'CREATE_USER',
    payload: response
  }
}

export const authenticateUser = (user) => {
  const response = axios.post('/signin', {user}).then((userData) => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    axios.defaults.headers.common['AUTHORIZATION'] = userData.data.jwt
    browserHistory.push('/transactions')
    return userData
  })

  return {
    type: 'AUTHENTICATE_USER',
    payload: response
  }
}


export const logoutUser = () => {
  sessionStorage.removeItem('jwt')

  return {
    type: 'LOGOUT_USER',
    payload: []
  }
}
