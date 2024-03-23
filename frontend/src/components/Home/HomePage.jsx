import React from 'react';
import { Typography, Button } from 'antd';


const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="text-center">
        <Typography.Title level={2}>Welcome to Free Knowledge Hub</Typography.Title>
        <Typography.Paragraph>
          Explore a vast collection of free books and articles. Find resources to enhance your knowledge in various fields.
        </Typography.Paragraph>
        <a href="/signup">
          <Button type="primary" size="large" className="mt-4" style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}>
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
