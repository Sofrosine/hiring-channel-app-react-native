import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

export const updateAddProject = (data,token) => {
  return {
    type: "UPDATE_ADD_PROJECT",
    payload: axios({
      method: "patch",
      url: "http://192.168.6.169:5000/company/updateProject",
      // url: "https://hiring-channel-application.herokuapp.com/company/updateProject",
      params: data,
      headers: {
        Authorization: `Bearer ${
          // AsyncStorage.getItem("@accessToken")
          JSON.parse(token)
        }`
      }
    })
  }
}
