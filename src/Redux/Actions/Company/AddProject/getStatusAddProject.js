import axios from 'axios'

const URL_STRING = "http://localhost:5000/company/getProject"
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/company/getProject"

export const getListProject = () => {
  return {
    type: "GET_LIST_PROJECT",
    payload: axios.get(URL_STRING, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("accessToken")
        )}`
      }
    })
  }
}