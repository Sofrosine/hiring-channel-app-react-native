const initialState = {
  reloadProfile: false,
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const updateCompany = (prevState = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COMPANY_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "UPDATE_COMPANY_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "UPDATE_COMPANY_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        reloadProfile: true
      };
    default:
      return prevState;
  }
};

export default updateCompany;
