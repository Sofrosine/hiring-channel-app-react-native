const initialState = {
  totalProject: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getTotalProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_TOTAL_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_TOTAL_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_TOTAL_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        totalProject: action.payload
      };
    default:
      return prevState;
  }
};

export default getTotalProject