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
  const response = axios.get(URL + 'transactions').then((transactionData) => {
    browserHistory.push('/transactions')
    return transactionData.data
  })

  return {
    type: 'FETCH_TRANSACTIONS',
    payload: response
  }
}
