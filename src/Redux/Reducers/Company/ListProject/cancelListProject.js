const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const cancelListProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "CANCEL_LIST_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "CANCEL_LIST_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "CANCEL_LIST_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default cancelListProject;
