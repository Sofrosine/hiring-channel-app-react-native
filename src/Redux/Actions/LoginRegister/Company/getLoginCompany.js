import axios from 'axios'

export const getLoginCompany = (email, password) => {
  return {
    type: 'GET_LOGIN_COMPANY',
    payload: axios({
      method: 'get',
      url: 'http://192.168.6.169:5000/company/login',
      params: {
        email: email,
        password: password,
      },
    }),
  };
}


