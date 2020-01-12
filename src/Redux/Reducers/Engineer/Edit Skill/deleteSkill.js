const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const deleteSkill = (prevState = initialState, action) => {
  switch (action.type) {
    case "DELETE_SKILL_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "DELETE_SKILL_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "DELETE_SKILL_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default deleteSkill;
