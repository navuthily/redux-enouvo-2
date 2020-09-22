import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import './style.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  loginAction
  } from "../redux/actions";
import  {token} from '../constant/config';
import { Redirect } from 'react-router-dom';
const LoginPage = (login) => {
  console.log(login,'login')
  const func = login.login;
    const onFinish = (values) => {
      func(values);
      };
      return (
       (token)?
       <Redirect to="/" />:
       (
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
       )
      );
  };

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(loginAction(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);