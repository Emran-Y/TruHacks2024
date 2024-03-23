import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

const Signup = () => {
    const [form] = Form.useForm();
    
    const onFinish = (values) => {
      console.log('Received values:', values);
     
    };
  
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200"> {/* Background color for the entire page */}
        <div className="w-full max-w-md">
          <Card className="p-6 shadow-lg bg-white"> {/* Increased shadow and added background color */}
            <Typography.Title level={3} className="mb-6 text-center font-semibold">
              Register
            </Typography.Title>
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{ remember: true }}
              scrollToFirstError
            >
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: 'Please enter your First Name!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[{ required: true, message: 'Please enter your Last Name!' }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Last Name" />
              </Form.Item>
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
                <Input prefix={<MailOutlined />} placeholder="Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please enter your password!' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                hasFeedback
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700"> {/* Blue button with hover effect */}
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Card>
          <Typography.Text className="text-center block mt-4">
            Already have an account? <a href="/login">Login</a>
          </Typography.Text>
        </div>
      </div>
    );
};

export default Signup;
