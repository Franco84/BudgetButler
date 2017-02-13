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
