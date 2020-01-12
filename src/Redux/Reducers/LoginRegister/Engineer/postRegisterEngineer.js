const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const postRegisterEngineer = (prevState = initialState, action) => {
  switch (action.type) {
    case "POST_REGISTER_ENGINEER_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_REGISTER_ENGINEER_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "POST_REGISTER_ENGINEER_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default postRegisterEngineer