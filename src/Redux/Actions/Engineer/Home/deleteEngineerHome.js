import axios from "axios";

// const URL_STRING = "http://localhost:5000/company/";

export const deleteEngineerHome = (id_project, id_engineer,token) => {
  return {
    type: "DELETE_ENGINEER_HOME",
    payload: axios.delete(
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
