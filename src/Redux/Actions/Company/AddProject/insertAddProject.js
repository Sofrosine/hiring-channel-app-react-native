import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

const URL_STRING = "http://192.168.6.169:5000/company/insertProject";
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/company/insertProject";

export const insertAddProject = (data,token) => {
  return {
    type: "INSERT_ADD_PROJECT",
    payload: axios.post(URL_STRING, data, {
      headers: {
        Authorization: `Bearer ${
          // AsyncStorage.getItem("@accessToken")
          JSON.parse(token)
        }`
      }
    })
  };
};
