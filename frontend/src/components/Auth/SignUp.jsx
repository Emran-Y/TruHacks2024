import React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, GoogleOutlined, GithubOutlined } from '@ant-design/icons';
import { useRegisterUserMutation } from '../../api/Services/AuthService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { mutate: registerUser } = useRegisterUserMutation();

  const onFinish = async (values) => {
    const { firstName, lastName, email, password } = values;
    const userData = {
      fullName: `${firstName} ${lastName}`,
      email,
      password
    };
    
    try {
      const response = await registerUser(userData);
      console.log('Registration response:', response);
      navigate('/confirm', { state: { email: email } });
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.error('Registration failed:', errorInfo);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <Card className="p-6 shadow-lg bg-white">
          <Typography.Title level={3} className="mb-6 text-center font-semibold">
            Register
          </Typography.Title>
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
              <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700">
                Register
              </Button>
            </Form.Item>
          </Form>
          <div className="flex justify-between mt-4">
            <Button 
              icon={<GoogleOutlined />} 
              className="w-1/2 bg-blue-500  text-white mr-2"
              onClick={() => console.log("Sign up with Google")}
            >
              Sign up with Google
            </Button>
            <div className="w-1"></div>
            <Button 
              icon={<GithubOutlined />} 
              className="w-1/2 bg-black text-white"
              onClick={() => console.log("Sign up with GitHub")}
            >
              Sign up with GitHub
            </Button>
          </div>
        </Card>
        <Typography.Text className="text-center block mt-4">
          Already have an account? <a href="/login">Login</a>
        </Typography.Text>
      </div>
    </div>
  );
};

export default Signup;
