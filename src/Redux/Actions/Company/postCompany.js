import axios from "axios";

const URL_STRING = "http://192.168.6.169:5000/company/";
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/company/";

export const postCompany = (data,config) => {
  return {
    type: "POST_COMPANY",
    payload: axios.post(URL_STRING, data,config)
  };
};
