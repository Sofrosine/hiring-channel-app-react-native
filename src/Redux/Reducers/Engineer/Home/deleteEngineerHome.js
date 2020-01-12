const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const deleteEngineerHome = (prevState = initialState, action) => {
  switch (action.type) {
    case "DELETE_ENGINEER_HOME_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "DELETE_ENGINEER_HOME_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "DELETE_ENGINEER_HOME_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default deleteEngineerHome;
