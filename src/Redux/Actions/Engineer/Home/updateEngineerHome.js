import axios from 'axios'

// const URL_STRING = "http://localhost:5000/engineer/"

export const updateEngineerHome = (id_project,body,token) => {
  return {
    type: "UPDATE_ENGINEER_HOME",
    payload: axios.patch(`http://192.168.6.169:5000/company/project/${id_project}`,body,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            token
          )}`
        }
      })
    // payload: axios.patch(`https://hiring-channel-application.herokuapp.com/company/project/${id_project}`, body,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${JSON.parse(
    //         localStorage.getItem("accessToken")
    //       )}`
    //     }
    //   })
  }
}
