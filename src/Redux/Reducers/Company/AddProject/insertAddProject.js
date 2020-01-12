const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const insertAddProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "INSERT_ADD_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "INSERT_ADD_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "INSERT_ADD_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default insertAddProject;
