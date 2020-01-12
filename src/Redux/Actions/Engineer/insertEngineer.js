import axios from "axios";

const URL_STRING = "http://192.168.6.169:5000/engineer";
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/engineer";

export const insertEngineer = (data,token) => {
  return {
    type: "INSERT_ENGINEER",
    payload: axios.post(URL_STRING, data, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    })
  };
};
