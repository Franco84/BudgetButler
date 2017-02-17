import axios from 'axios'
import {browserHistory} from 'react-router'

const URL = "http://localhost:3000/api/v1/"


export const fetchTransactions = (callback) => {
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.get(URL + 'transactions').then((transactionData) => {
    // browserHistory.push('/transactions')
    callback(transactionData.data)
    return transactionData.data
  })

  return {
    type: 'FETCH_TRANSACTIONS',
    payload: response
  }
}

export const createTransaction = (transaction) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  let headers = sessionStorage.getItem('jwt');
  const response = axios.post(URL + 'transactions', {transaction}).then((transactionData) => {
    return transactionData.data
  })

  return {
    type: 'CREATE_TRANSACTION',
    payload: response
  }
}

export const updateTransaction = (transaction) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.patch(URL + `transactions/${transaction.id}`, {transaction}).then((transactionData) => {
    return transactionData.data
  })
  return {
    type: 'UPDATE_TRANSACTION',
    payload: response
  }
}

export const deleteTransaction = (transaction) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.delete(URL + `transactions/${transaction.id}`, {transaction}).then((transactionData) => {
    return transactionData.data
  })
  return {
    type: 'DELETE_TRANSACTION',
    payload: response
  }
}

export const fetchExpenses = () => {
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.get(URL + 'expenses').then((expensesData) => {
    // browserHistory.push('/expenses')
    return expensesData.data
  })

  return {
    type: 'FETCH_EXPENSES',
    payload: response
  }
}

export const createExpense = (expense) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  let headers = sessionStorage.getItem('jwt');
  const response = axios.post(URL + 'expenses', {expense}).then((expenseData) => {
    return expenseData.data
  })

  return {
    type: 'CREATE_EXPENSE',
    payload: response
  }
}

export const updateExpenses = (expense) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.patch(URL + `expenses/${expense.id}`, {expense}).then((expensesData) => {
  return expensesData.data
  })
  return {
    type: 'UPDATE_EXPENSES',
    payload: response
  }
}

export const deleteExpenses = (expense) => {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.delete(URL + `expenses/${expense.id}`, {expense}).then((expensesData) => {
    return expensesData.data
  })
  return {
    type: 'DELETE_EXPENSES',
    payload: response
  }
}

export const createUser = (user) => {
  const response = axios.post(URL + 'signup', user).then((userData) => {
    sessionStorage.setItem("jwt", userData.data.jwt)
    sessionStorage.setItem("name", userData.data.name)
    browserHistory.push('/')
    return userData
  })

  return {
    type: 'CREATE_USER',
    payload: response
  }
}

export const authenticateUser = (user) => {
  const response = axios.post(URL + 'signin', {user}).then((userData) => {
    if (userData.data.jwt) {
      console.log(' ')
      sessionStorage.setItem("jwt", userData.data.jwt)
      return userData.data.jwt
    } else {
      browserHistory.push('/login')
      return userData.data.message
    }
  }).then(jwt => {
    axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
    return jwt
  }).then(jwt => {
    browserHistory.push('/transactions')
    return jwt
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
