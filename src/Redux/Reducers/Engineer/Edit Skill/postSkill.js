const initialState = {
  redirectHome: false,
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const postSkill = (prevState = initialState, action) => {
  switch (action.type) {
    case "POST_SKILL_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_SKILL_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "POST_SKILL_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        redirectHome: true
      };
    default:
      return prevState;
  }
};

export default postSkill;
