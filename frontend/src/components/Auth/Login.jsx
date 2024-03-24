import React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useLoginUserMutation } from '../../api/Services/AuthService';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const { login } = useAuth(); // Use useAuth hook to access authentication state and functions

  const { mutate: loginUser } = useLoginUserMutation();

  const onFinish = async (values) => {
    try {
      const { email, password } = values;
      const loginData = { email, password };
      const response = await loginUser(loginData);
      console.log('Login response:', response);
      // Get token from response or local storage
      const token = response?.token || localStorage.getItem('token');
      // Check if token is present
      if (token) {
        // Call login function from useAuth to update authentication state
        login(token);
        // Navigate to home page after successful login
        navigate('/');
      } else {
        console.error('Login error: No token found');
        // Handle login error due to missing token
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error, e.g., display error message to the user
    }
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
            initialValues={{ email: email, remember: true }}
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
          <div className="flex justify-end">
            <Typography.Text>
              <a href="/forgot-password">
                <ExclamationCircleOutlined className="mr-1" /> Forgot Password?
              </a>
            </Typography.Text>
          </div>
          <div className="text-center mt-6">
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
