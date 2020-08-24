import React from 'react';
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  TextField
} from '@material-ui/core';
import { Wrapper } from '../../../components/StyledComp';
import './styles.scss'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface State {
  firstname: string;
  address: string;
  email: string;
  username: string;
  password: string;
  showPassword: boolean;
  confirmPassword: string;
  accoutBalance: string;
  creditCardNumber: string;
}

export default function Register() {
  const [values, setValues] = React.useState<State>({
    firstname: '',
    address: '',
    email: '',
    username: '',
    password: '',
    showPassword: false,
    confirmPassword: '',
    accoutBalance: '10000',
    creditCardNumber: '123-fake-ccnum-456',
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
            <Card className="register__card" variant="outlined">
              <CardContent>
                <div className="d-flex flex-row flex-row-reverse">
                  <div className="flex-column bg-red text-white text-right register__badge">
                    DayTrader Registration
                  </div>
                </div>
                <div className="register__password">
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">Firstname</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type="text"
                      value={values.firstname}
                      onChange={handleChange('firstname')}
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
                <div className="register__password">
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">Address</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type="text"
                      value={values.address}
                      onChange={handleChange('address')}
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
                <div className="register__password">
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">Email</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type="text"
                      value={values.email}
                      onChange={handleChange('email')}
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
                <div className="register__password">
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-username">Username</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type="text"
                      value={values.username}
                      onChange={handleChange('username')}
                      labelWidth={70}
                    />
                  </FormControl>
                </div>
                <div className="register__password">
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
                <div className="register__password">
                  <TextField
                    label="Confirm password"
                    id="outlined-start-adornment"
                    value={values.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    variant="outlined"
                  />
                </div>
                <div className="register__password">
                  <TextField
                    label="Account Number"
                    id="outlined-start-adornment"
                    value={values.accoutBalance}
                    onChange={handleChange('accoutBalance')}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    variant="outlined"
                  />
                </div>
                <div className="register__password">
                  <TextField
                    label="Credit Card Number"
                    id="outlined-start-adornment"
                    value={values.creditCardNumber}
                    variant="outlined"
                    onChange={handleChange('creditCardNumber')}
                  />
                </div>
                <div className="register__button">
                  <Button variant="outlined">Submit</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Wrapper >
    </div >
  )
}
