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
  register = (registerFormValue: any) => {
    return http.post("accounts", registerFormValue, { httpsAgent: httpsAgents });
  }
}

export const authSevice = new AuthService();