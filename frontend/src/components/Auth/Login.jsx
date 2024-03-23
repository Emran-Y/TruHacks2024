import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const Login = () => {
    const [form] = Form.useForm();
    
    const onFinish = (values) => {
      console.log('Received values:', values);
     
    };
  
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="w-full max-w-md">
          <Card className="p-6 shadow-lg bg-white">
            <Typography.Title level={3} className="mb-6 text-center font-semibold">
              Login
            </Typography.Title>
            <Form
              form={form}
              name="login"
              onFinish={onFinish}
              initialValues={{ remember: true }}
              scrollToFirstError
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not a valid E-mail!',
                  },
                  { required: true, message: 'Please enter your email!' },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700">
                  Login
                </Button>
              </Form.Item>
            </Form>
            <div className="flex justify-between">
              <Typography.Text>
                <a href="/forgot-password">
                  <ExclamationCircleOutlined className="mr-1" /> Forgot Password?
                </a>
              </Typography.Text>
            </div>
            <div className="text-center mt-4">
              <Typography.Text>
                Don't have an account? <a href="/signup">Sign up</a>
              </Typography.Text>
            </div>
          </Card>
        </div>
      </div>
    );
};

export default Login;
