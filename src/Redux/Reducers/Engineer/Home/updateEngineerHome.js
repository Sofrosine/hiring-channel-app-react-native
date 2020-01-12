const initialState = {
  updateHomeEngineer: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const updateEngineerHome = (prevState = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ENGINEER_HOME_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "UPDATE_ENGINEER_HOME_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "UPDATE_ENGINEER_HOME_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        updateEngineerHome: action.payload
      };
    default:
      return prevState;
  }
};

export default updateEngineerHome;
