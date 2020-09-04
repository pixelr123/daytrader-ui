import React, { useEffect } from 'react'
import {
  Card,
  CardContent,
} from '@material-ui/core';
import { Wrapper } from '../../../components/StyledComp';
import './styles.scss'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { authSevice } from '../../../core/http/auth.service';
import Nprogress from 'nprogress';

interface State {
  username: string;
  password: string;
  showPassword: boolean;
}

export default function Login() {
  Nprogress.configure({
    showSpinner: false,
    parent: "#login"
  });

  const { handleSubmit, register, setValue, reset } = useForm();

  const onLoginSumbit = async (loginFormValue: any, event: any) => {
    Nprogress.start();
    const { email, password } = loginFormValue;
    const response = await authSevice.getUserId(email);
    const loginRes = await authSevice.login(response.data.userID, password);
    if (loginRes.status === 200) {
      alert('login success');
      console.log(loginRes.data);
      Nprogress.done();
    }
    event.target.reset();
  }

  useEffect(() => {
    register({ name: 'email' });
    register({ name: 'password' });
  }, []);

  return (
    <div className="trading__container">
      <Wrapper className="trading__wrapper">
        <div className="trading__row">
          <div className="trading__item">
            <Card className="login__card" variant="outlined" id="login">
              <form onSubmit={handleSubmit(onLoginSumbit)}>
                <CardContent>
                  <div className="d-flex flex-row flex-row-reverse">
                    <div className="flex-column bg-red text-white text-right dayTrader__badge">
                      DayTrader Login
                  </div>
                  </div>
                  <div className="login__form">
                    <Input
                      allowClear
                      type="text"
                      ref={register}
                      placeholder="Email"
                      onChange={(event) => setValue('email', event.target.value)} />
                  </div>
                  <div className="login__password">
                    <Input.Password
                      type="password"
                      ref={register}
                      placeholder="Password"
                      onChange={(event) => setValue('password', event.target.value)}
                      iconRender={visible =>
                        (visible
                          ? <EyeTwoTone />
                          : <EyeInvisibleOutlined />
                        )}
                    />
                  </div>
                  <div className="login__button">
                    <Button block htmlType="submit">Login</Button>
                  </div>
                  <div className="login__footer small">
                    First time user <Link to="/trading-portfolios/signup"><span className="login__footer">Sign up</span></Link>
                  </div>
                </CardContent>
              </form>
            </Card>
          </div>
        </div>
      </Wrapper >
    </div >
  )
}
