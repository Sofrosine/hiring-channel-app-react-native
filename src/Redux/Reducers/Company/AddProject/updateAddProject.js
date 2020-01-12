const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const updateAddProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "UPDATE_ADD_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "UPDATE_ADD_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "UPDATE_ADD_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default updateAddProject;
