const initialState = {
  homeEngineer: false,
  homeCompany: false,
  profileEngineer: false,
  profileCompany: false
};

const redirectNavbar = (state = initialState, action) => {
  switch (action.type) {
    case "REDIRECT_HOME_TRUE":
      return {
        ...state,
        homeEngineer: true,
        homeCompany: true
      };
    case "REDIRECT_HOME_FALSE":
      return {
        ...state,
        homeEngineer: false,
        homeCompany: false
      };
    case "REDIRECT_PROFILE_TRUE":
      return {
        ...state,
        homeEngineer: false,
        homeCompany: false,
        profileEngineer: true,
        profileCompany: true
      };
    case "REDIRECT_PROFILE_FALSE":
      return {
        ...state,
        homeEngineer: false,
        homeCompany: false,
        profileEngineer: false,
        profileCompany: false
      };
    default:
      return state;
  }
};

export default redirectNavbar;
