import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
// const URL_STRING = "http://localhost:5000/engineer/profile"
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/engineer/profile"

export const getProfileEngineer = (user) => {
  return {
    type: "GET_PROFILE_ENGINEER",
    payload: axios.get(`http://192.168.6.169:5000/engineer/user/${user}`, {
      headers: {
        Authorization: `Bearer ${
          AsyncStorage.getItem("@accessToken")
        }`
      }
    }
    )
  }
}


