const initialState = {
  profileDataSkill: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getProfileSkill = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_SKILL_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_PROFILE_SKILL_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_PROFILE_SKILL_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        profileDataSkill: action.payload
      };
    default:
      return prevState;
  }
};

export default getProfileSkill