const initialState = {
  projectStatus: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getStatusAddProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_STATUS_ADD_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_STATUS_ADD_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_STATUS_ADD_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        projectStatus: action.payload
      };
    default:
      return prevState;
  }
};

export default getStatusAddProject