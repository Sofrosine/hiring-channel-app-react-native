import axios from 'axios'

const URL_STRING = "http://192.168.6.169:5000/engineer/project"
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/engineer/project"

export const getProjectEngineer = (token) => {
  return {
    type: "GET_PROJECT_ENGINEER",
    payload: axios.get(URL_STRING, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    }
    )
  }
}


