const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const updateIsStatusEngineer0 = (prevState = initialState, action) => {
  switch (action.type) {
    case "UPDATE_IS_STATUS_ENGINEER_0_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "UPDATE_IS_STATUS_ENGINEER_0_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "UPDATE_IS_STATUS_ENGINEER_0_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default updateIsStatusEngineer0