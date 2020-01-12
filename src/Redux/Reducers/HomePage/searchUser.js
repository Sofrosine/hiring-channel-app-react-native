const initialState = {
  searchData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const searchUser = (prevState = initialState, action) => {
  switch (action.type) {
    case "SEARCH_USER_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "SEARCH_USER_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "SEARCH_USER_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        searchData: action.payload
      };
    default:
      return prevState;
  }
};

export default searchUser;
