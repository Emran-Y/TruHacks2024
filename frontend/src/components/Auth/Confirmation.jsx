import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { CheckCircleOutlined, KeyOutlined, ReloadOutlined } from '@ant-design/icons';
import { useVerifyEmailMutation } from '../../api/Services/AuthService';
import { useLocation, useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const [form] = Form.useForm();
  const { mutate: verifyEmail } = useVerifyEmailMutation();
  const location = useLocation();
  const navigate = useNavigate();
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const email = location.state?.email;

  const onFinish = async (values) => {
    const { verificationCode } = values;
    try {
      const verificationData = { email, verificationCode };
      const response = await verifyEmail(verificationData);
      console.log('Verification response:', response);
      setVerificationSuccess(true); // Set verification success flag
    } catch (error) {
      console.error('Error verifying email:', error);
    }
  };

  // Redirect to login page with email pre-filled
  const redirectToLogin = () => {
    navigate('/login', { state: { email } });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <Card className="p-6 shadow-lg bg-white">
          <Typography.Title level={3} className="mb-6 text-center font-semibold">
            Confirm Your Email
          </Typography.Title>
          {verificationSuccess ? ( // Show success message if verification succeeded
            <div className="text-center mb-4 text-green-500">
              <CheckCircleOutlined style={{ fontSize: '24px' }} />
              <Typography.Text>Verification Successful!</Typography.Text>
            </div>
          ) : (
            <>
              <Typography.Text className="mb-4 text-center block">
                Please enter the 6-digit confirmation code sent to {email}.
              </Typography.Text>
              <Form
                form={form}
                name="confirmation"
                onFinish={onFinish}
                initialValues={{ remember: true }}
                scrollToFirstError
              >
                <Form.Item
                  name="verificationCode"
                  rules={[
                    { required: true, message: 'Please enter the confirmation code!' },
                    { len: 6, message: 'The confirmation code must be 6 digits!' },
                    { pattern: /^[0-9]*$/, message: 'Please enter only digits!' },
                  ]}
                >
                  <Input prefix={<KeyOutlined />} placeholder="Confirmation Code" maxLength={6} />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-full bg-blue-500 hover:bg-blue-700">
                    Confirm
                  </Button>
                </Form.Item>
              </Form>
            </>
          )}
          <div className="text-center mt-4">
            <Typography.Text>
              Didn't receive the code? <a href="/resend-code"><ReloadOutlined /> Resend Code</a>
            </Typography.Text>
          </div>
          {verificationSuccess && ( // Redirect button appears only after successful verification
            <div className="text-center mt-4">
              <Button type="primary"  className="bg-blue-500"  onClick={redirectToLogin}>Go to Login</Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Confirmation;
