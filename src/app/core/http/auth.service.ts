import axios from 'axios';
import https from 'https';

const baseURL = `${process.env.REACT_APP_BASE_URL}`;

const httpsAgents = new https.Agent({
  rejectUnauthorized: false,
});

const http = axios.create({
  baseURL: baseURL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  })
})

class AuthService {

  header = {
    'Content-Type': 'text/plain'
  }

  register = (registerFormValue: any) => {
    return http.post("accounts", registerFormValue, { httpsAgent: httpsAgents });
  }

  login = (userId: any, password: any) => {
    return http.patch(`login/${userId}`, password,
      {
        httpsAgent: httpsAgents,
        headers: this.header,
      });
  }

  getUserId = (email: string) => {
    return http.get(`accounts/email?email=${email}`);
  }
}

export const authSevice = new AuthService();