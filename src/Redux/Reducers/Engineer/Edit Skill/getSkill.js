const initialState = {
  skillData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getSkill = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_SKILL_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_SKILL_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_SKILL_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        skillData: action.payload
      };
    default:
      return prevState;
  }
};

export default getSkill