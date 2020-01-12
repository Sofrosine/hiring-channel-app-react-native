const initialState = {
  profileEngineer: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getProfileEngineer = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_ENGINEER_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_PROFILE_ENGINEER_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_PROFILE_ENGINEER_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        profileEngineer: action.payload
      };
    default:
      return prevState;
  }
};

export default getProfileEngineer