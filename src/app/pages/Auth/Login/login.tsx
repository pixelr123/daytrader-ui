import React from 'react'
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button
} from '@material-ui/core';
import { Wrapper } from '../../../components/StyledComp';
import './styles.scss'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Link } from 'react-router-dom';

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

export default function Login() {

  const [values, setValues] = React.useState<State>({
    username: '',
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="trading__container">
      <Wrapper className="trading__wrapper">
        <div className="trading__row">
          <div className="trading__item">
            <Card className="login__card" variant="outlined">
              <CardContent>
                <div className="d-flex flex-row flex-row-reverse">
                  <div className="flex-column bg-red text-white text-right dayTrader__badge">
                    DayTrader Login
                  </div>
                </div>
                <div className="login__form">
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type="text"
                      value={values.username}
                      onChange={handleChange('username')}
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
                <div className="login__password">
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChange('password')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
                <div className="login__button">
                  <Button variant="outlined">Login</Button>
                </div>
                <div className="login__footer small">
                  First time user <Link to="/trading-portfolios/signup"><span className="login__footer">Sign up</span></Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Wrapper >
    </div >
  )
}
