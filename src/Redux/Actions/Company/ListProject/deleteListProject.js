import axios from "axios";

export const deleteListProject = (id_project) => {
  return {
    type: "DELETE_LIST_PROJECT",
    payload: axios
      .delete(
        `http://localhost:5000/company/project/${id_project}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("accessToken")
            )}`
          }
        }
      )
  };
};
