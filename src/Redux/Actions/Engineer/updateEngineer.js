import axios from 'axios'

const URL_STRING = "http://192.168.6.169:5000/engineer/"
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/engineer/"

export const updateEngineer = (params,token) => {
  return {
    type: "UPDATE_ENGINEER",
    payload: axios({
      method: "patch",
      url: URL_STRING,
      params: params,
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    })
  }
}
