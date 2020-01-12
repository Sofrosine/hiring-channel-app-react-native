import axios from 'axios'

const URL_STRING = "http://localhost:5000/company/getProject"

export const getProfileAddProject = (userId) => {
  return {
    type: "GET_PROFILE_ADD_PROJECT",
    payload: axios.get(`http://localhost:5000/engineer/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("accessToken")
        )}`
      }
    })
    // payload: axios.get(`https://hiring-channel-application.herokuapp.com/engineer/user/${userId}`, {
    //   headers: {
    //     Authorization: `Bearer ${JSON.parse(
    //       localStorage.getItem("accessToken")
    //     )}`
    //   }
    // })
  }
}