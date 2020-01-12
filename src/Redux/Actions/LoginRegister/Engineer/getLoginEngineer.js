import axios from 'axios'

export const getLoginEngineer = (email, password) => {
  return {
    type: "GET_LOGIN_ENGINEER",
    payload: axios({
      method: "get",
      url: "http://192.168.6.169:5000/engineer/login",
      params: {
        email: email,
        password: password
      }
    })
  }
}


