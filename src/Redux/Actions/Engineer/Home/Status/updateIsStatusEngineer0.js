import axios from 'axios'

export const updateIsStatusEngineer0 = (id_project,token) => {
  return {
    type: "UPDATE_IS_STATUS_ENGINEER_0",
    payload: axios({
      method: "patch",
      url: `http://192.168.6.169:5000/company/project2/${id_project}`,
      // url: `https://hiring-channel-application.herokuapp.com/company/project2/${id_project}`,
      params: {
        status: "Pending"
      },
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    })
  }
}