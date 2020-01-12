import axios from 'axios'

const URL_STRING = "http://192.168.6.169:5000/engineer/profile"
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/engineer/profile"

export const getProfileSkill = (token) => {
  return {
    type: "GET_PROFILE_SKILL",
    payload: axios.get(URL_STRING, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    }
    )}
  }
  

