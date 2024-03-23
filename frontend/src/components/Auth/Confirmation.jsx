import React from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { CheckCircleOutlined, KeyOutlined, ReloadOutlined } from '@ant-design/icons';

const Confirmation = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Code for confirming the email and redirecting the user
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="w-full max-w-md">
        <Card className="p-6 shadow-lg bg-white">
          <Typography.Title level={3} className="mb-6 text-center font-semibold">
            Confirm Your Email
          </Typography.Title>
          <Typography.Text className="mb-4 text-center block">
            Please enter the 6-digit confirmation code sent to your email.
          </Typography.Text>
          <Form
            form={form}
            name="confirmation"
            onFinish={onFinish}
            initialValues={{ remember: true }}
            scrollToFirstError
          >
            <Form.Item
              name="confirmationCode"
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
                <CheckCircleOutlined /> Confirm
              </Button>
            </Form.Item>
          </Form>
          <div className="text-center mt-4">
            <Typography.Text>
              Didn't receive the code? <a href="/resend-code"><ReloadOutlined /> Resend Code</a>
            </Typography.Text>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Confirmation;
