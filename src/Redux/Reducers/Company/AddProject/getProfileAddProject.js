const initialState = {
  profileData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getProfileAddProject = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE_ADD_PROJECT_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_PROFILE_ADD_PROJECT_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_PROFILE_ADD_PROJECT_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        profileData: action.payload
      };
    default:
      return prevState;
  }
};

export default getProfileAddProject