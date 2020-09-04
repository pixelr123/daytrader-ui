import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
} from '@material-ui/core';
import { Wrapper } from '../../../components/StyledComp';
import './styles.scss'
import { registerMapping as fields } from './registerMapping';
import { Input, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useForm } from "react-hook-form";
import Nprogress from 'nprogress';
import { authSevice } from '../../../core/http/auth.service';

export default function Register() {
  Nprogress.configure({
    showSpinner: false,
    parent: "#register"
  });

  const values: any = {
    openBalance: '10000',
    creditCard: '123-fake-ccnum-456'
  }

  const { handleSubmit, register, setValue, errors, reset } = useForm();

  useEffect(() => {
    fields.forEach(item => {
      register({ name: item.fieldName });
    })
  }, []);

  const onSubmitRegisterForm = async (registerFormValue: any) => {
    Nprogress.start();
    if (registerFormValue !== undefined) {
      const { openBalance, userID, fullName, address, email, creditCard, password } = registerFormValue;
      let registerData = {
        "openBalance": openBalance !== undefined ? openBalance : '10000',
        "profile": {
          "userID": userID,
          "fullName": fullName,
          "address": address,
          "email": email,
          "creditCard": creditCard !== undefined ? creditCard : '123-fake-ccnum-456',
          "password": password
        },
        "profileID": userID
      }
      const response = await authSevice.register(registerData)
      console.log(response)
      if (response.status === 201) {
        alert("register success");
        Nprogress.done();
      }
    }
    reset();
  }

  return (
    <div className="trading__container">
      <Wrapper className="trading__wrapper">
        <div className="trading__row">
          <div className="trading__item">
            <Card className="register__card" variant="outlined" id="register">
              <CardContent>
                <form onSubmit={handleSubmit(onSubmitRegisterForm)}>
                  <div className="d-flex flex-row flex-row-reverse">
                    <div className="flex-column bg-red text-white text-right dayTrader__badge">
                      DayTrader Registration
                  </div>
                  </div>

                  {fields.map((field, index) => (
                    <div key={index}>
                      <div className="mt-2">
                        {field.placeHolder}
                      </div>
                      <div
                        className="mt-1">
                        {field.type === 'text' || field.type === 'number'
                          ? <Input
                            allowClear
                            type={field.type}
                            ref={register}
                            defaultValue={values[field.fieldName]}
                            placeholder={field.placeHolder}
                            onChange={(event) => setValue(field.fieldName, event.target.value)}
                          />
                          : <Input.Password
                            type={field.type}
                            ref={register}
                            placeholder={field.placeHolder}
                            onChange={(event) => setValue(field.fieldName, event.target.value)}
                            iconRender={visible =>
                              (visible
                                ? <EyeTwoTone />
                                : <EyeInvisibleOutlined />
                              )}
                          />
                        }
                        {errors[field.fieldName] &&
                          <div
                            className="small">
                            {field.placeHolder} is Required
                          </div>}
                      </div>
                    </div>
                  ))}
                  <div className="d-flex flex-row">
                    <div className="flex-column w-100 mt-4">
                      <Button htmlType="submit" block>Submit</Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Wrapper >
    </div >
  )
}
