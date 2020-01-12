const initialState = {
  redirectHome: false,
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const insertEngineer = (prevState = initialState, action) => {
  switch (action.type) {
    case "INSERT_ENGINEER_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "INSERT_ENGINEER_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "INSERT_ENGINEER_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        redirectHome: true
      };
    default:
      return prevState;
  }
};

export default insertEngineer;
