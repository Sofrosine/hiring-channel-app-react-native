import axios from "axios";

// const URL_STRING = "http://localhost:5000/company/";

export const deleteSkill = (id_engineer, id_skill,token) => {
  return {
    type: "DELETE_SKILL",
    payload: axios.delete(
      `http://192.168.6.169:5000/engineer/skill/${id_engineer}/${id_skill}`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            token
          )}`
        }
      }
    )
    // payload: axios.delete(
    //   `https://hiring-channel-application.herokuapp.com/engineer/skill/${id_engineer}/${id_skill}`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${JSON.parse(
    //         localStorage.getItem("accessToken")
    //       )}`
    //     }
    //   }
    // )
  };
};
