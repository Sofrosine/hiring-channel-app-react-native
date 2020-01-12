const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const updateIsStatusEngineer2 = (prevState = initialState, action) => {
  switch (action.type) {
    case "UPDATE_IS_STATUS_ENGINEER_2_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "UPDATE_IS_STATUS_ENGINEER_2_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "UPDATE_IS_STATUS_ENGINEER_2_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default updateIsStatusEngineer2