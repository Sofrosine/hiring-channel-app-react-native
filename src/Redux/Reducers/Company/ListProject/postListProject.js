const initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const postListProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "POST_LIST_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "POST_LIST_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "POST_LIST_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    default:
      return prevState;
  }
};

export default postListProject;
