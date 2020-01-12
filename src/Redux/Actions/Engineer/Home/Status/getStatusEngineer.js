import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

const URL_STRING = "http://192.168.6.169:5000/engineer/status"
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/engineer/status"

export const getStatusEngineer = (token) => {
  return {
    type: "GET_STATUS_ENGINEER",
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


