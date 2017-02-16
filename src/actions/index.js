import axios from 'axios'
import {browserHistory} from 'react-router'

const URL = "http://localhost:3000/api/v1/"

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

export const fetchTransactions = (transaction) => {
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt');
  const response = axios.get(URL + 'transactions').then((transactionData) => {
    browserHistory.push('/transactions')
    return transactionData.data
  })

  return {
    type: 'FETCH_TRANSACTIONS',
    payload: response
  }
}


export const createTransaction = (transaction) => {
  let headers = sessionStorage.getItem('jwt');
  const response = axios.post(URL + 'transactions', {transaction}).then((transactionData) => {
    return transactionData.data
  })

  return {
    type: 'CREATE_TRANSACTION',
    payload: response
  }
}


export const authenticateUser = (user) => {
  const response = axios.post(URL + 'signin', {user}).then((userData) => {
    if (userData.data.jwt) {
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
