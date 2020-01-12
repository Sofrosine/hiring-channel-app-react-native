import axios from 'axios'
import qs from 'querystring'

const URL_STRING = "http://192.168.6.169:5000/engineer/register"

export const postRegisterEngineer = (email, password) => {
  return {
    type: "POST_REGISTER_ENGINEER",
    payload: axios
      .post(
        URL_STRING,
        qs.stringify({
          email: email,
          password: password
        }),
        {
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
  }
}