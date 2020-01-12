import axios from 'axios'

const URL_STRING = "http://192.168.6.169:5000/skill"
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/skill"

export const getSkill = () => {
  return {
    type: "GET_SKILL",
    payload: axios.get(URL_STRING)
  }
}