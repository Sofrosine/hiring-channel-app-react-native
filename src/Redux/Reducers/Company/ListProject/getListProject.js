const initialState = {
  projectList: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getListProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_LIST_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_LIST_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        projectList: action.payload
      };
    default:
      return prevState;
  }
};

export default getListProject