const initialState = {
  projectEngineer: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getProjectEngineer = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_PROJECT_ENGINEER_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_PROJECT_ENGINEER_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_PROJECT_ENGINEER_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        projectEngineer: action.payload
      };
    default:
      return prevState;
  }
};

export default getProjectEngineer