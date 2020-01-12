const initialState = {
  statusEngineer: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getStatusEngineer = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_STATUS_ENGINEER_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_STATUS_ENGINEER_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_STATUS_ENGINEER_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        statusEngineer: action.payload
      };
    default:
      return prevState;
  }
};

export default getStatusEngineer