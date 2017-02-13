import axios from 'axios'
import {browserHistory} from 'react-redux'

const URL = "http://localhost:3000/api/v1/"

export const createUser = (user) => {
  const response = axios.post(URL + 'signup', user).then((userData) => {
    sessionStorage.setItems("jwt", userData.data.jwt)
    browserHistory.push('/')
    return userData
  })

  return {
    type: 'CREATE_USER',
    payload: response
  }
}
