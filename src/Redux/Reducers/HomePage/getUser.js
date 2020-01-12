const initialState = {
  userData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getUser = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_USER_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_USER_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_USER_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        userData: action.payload
      };
    default:
      return prevState;
  }
};

export default getUser;
