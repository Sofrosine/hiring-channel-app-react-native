import axios from 'axios'

export const updateStatusEngineer = (id,state_is_accept,token) => {
  return {
    type: "UPDATE_STATUS_ENGINEER",
    payload: axios({
      method: "patch",
      url: `http://192.168.6.169:5000/engineer/status/${id}`,
      params: {
        is_accept: state_is_accept
      },
      headers: {
        Authorization: `Bearer ${JSON.parse(
          token
        )}`
      }
    })
  }
}