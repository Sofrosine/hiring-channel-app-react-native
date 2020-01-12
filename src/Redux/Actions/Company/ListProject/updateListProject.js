import axios from 'axios'

export const updateListProject = (data,id_project,token) => {
  return {
    type: "UPDATE_LIST_PROJECT",
    payload: axios
      .patch(
        `http://192.168.6.169:5000/company/project/${id_project}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              token
            )}`
          }
        }
      )
  }
}
