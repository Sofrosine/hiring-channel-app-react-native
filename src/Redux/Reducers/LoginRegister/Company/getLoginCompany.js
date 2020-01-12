const initialState = {
  companyData: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false
};

const getLoginCompany = (prevState = initialState, action) => {
  switch (action.type) {
    case "GET_LOGIN_COMPANY_PENDING":
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false
      };
    case "GET_LOGIN_COMPANY_REJECTED":
      return {
        ...prevState,
        isPending: false,
        isRejected: true
      };
    case "GET_LOGIN_COMPANY_FULFILLED":
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        companyData: action.payload
      };
    default:
      return prevState;
  }
};

export default getLoginCompany