import axios from "axios";

export const cancelListProject = (id_project,id_engineer,token) => {
  return {
    type: "CANCEL_LIST_PROJECT",
    payload: axios
      .delete(
        `http://192.168.6.169:5000/engineer/status/${id_project}/${id_engineer}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              token
            )}`
          }
        }
      )
  };
};
