import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
const URL_STRING = "http://192.168.6.169:5000/company/getProject2"

export const getListProject = (token) => {
  return {
    type: "GET_LIST_PROJECT",
    payload: axios.get("http://192.168.6.169:5000/company/getProject2", {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(token)
          }`
      }
    })
  }
}