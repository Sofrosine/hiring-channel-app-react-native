import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';

const URL_STRING = "http://192.168.6.169:5000/company/addProject";

export const postListProject = (data,token) => {
  return {
    type: "POST_LIST_PROJECT",
    payload: axios.post(URL_STRING, data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    })
  };
};
