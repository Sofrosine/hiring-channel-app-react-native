import axios from 'axios'

export const getTotalProject = (id_engineer) => {
  return {
    type: "GET_TOTAL_PROJECT",
    payload: axios.get(`http://localhost:5000/engineer/totalProject/${id_engineer}`, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem("accessToken")
        )}`
      }
    }
    )
    // payload: axios.get(`https://hiring-channel-application.herokuapp.com/engineer/totalProject/${id_engineer}`, {
    //   headers: {
    //     Authorization: `Bearer ${JSON.parse(
    //       localStorage.getItem("accessToken")
    //     )}`
    //   }
    // }
    // )
  }
}


