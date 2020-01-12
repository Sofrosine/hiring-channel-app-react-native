const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const updateListProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LIST_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "UPDATE_LIST_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "UPDATE_LIST_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default updateListProject;
