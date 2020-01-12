import axios from 'axios'

const URL_STRING = "http://192.168.6.169:5000/company/"
// const URL_STRING = "https://hiring-channel-application.herokuapp.com/company/"

export const updateCompany = (params,token) => {
  return {
    type: "UPDATE_COMPANY",
    payload: axios({
      method: "patch",
      url: URL_STRING,
      params: params,
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    })
  }
}
