
const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const deleteListProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "DELETE_LIST_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "DELETE_LIST_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "DELETE_LIST_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default deleteListProject;
