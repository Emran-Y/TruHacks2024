import React from 'react';
import { Typography, Button, Avatar, Table } from 'antd';

import { ArrowRightOutlined,HeartOutlined,CloseCircleOutlined , StarOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { SmileOutlined, BookOutlined, ReadOutlined, DatabaseOutlined, ContainerOutlined, TagOutlined, TagTwoTone, HourglassOutlined } from '@ant-design/icons';
import './homepage.css'
// Example data for features
const featuresData = [
  { title: 'Vast Collection', description: 'Explore a vast collection of books and articles.', icon: <SmileOutlined /> },
  { title: 'Search Functionality', description: 'Effortlessly search for topics of interest.', icon: <HeartOutlined /> },
  { title: 'User-Friendly Interface', description: 'Enjoy an intuitive and easy-to-use interface.', icon: <StarOutlined /> },
  { title: 'Personalized Recommendations', description: 'Receive personalized recommendations based on your interests.', icon: <CheckOutlined /> },
  { title: 'Offline Reading', description: 'Download content for offline reading anytime, anywhere.', icon: <CheckOutlined /> },
  { title: 'Community Interaction', description: 'Engage with a vibrant community of learners and experts.', icon: <CheckOutlined /> },
];

// Example data for pros and cons
const prosConsData = {
  pros: [
    'Access to a vast collection of resources',
    'Efficient search functionality',
    'User-friendly interface for seamless navigation',
    'Personalized recommendations enhance user experience',
    'Ability to download content for offline reading',
    'Engagement with a diverse community of learners',
  ],
  cons: [
    'Some premium content may require a subscription',
    'Limited availability of certain niche topics',
    'Dependence on internet connectivity for full functionality',
    'Potential for information overload without proper filtering',
    'Community engagement may vary based on user activity',
  ],
};

// Example data for statistical tables
// Example data for statistical tables
const tableData = [
  { key: '1', category: 'Books', total: 1500, available: 1200, reserved: 300 },
  { key: '2', category: 'Articles', total: 2000, available: 1800, reserved: 200 },
  { key: '3', category: 'Research Papers', total: 1000, available: 900, reserved: 100 },
  { key: '4', category: 'Magazines', total: 800, available: 600, reserved: 200 },
  { key: '5', category: 'Journals', total: 1200, available: 1000, reserved: 200 },
  { key: '6', category: 'E-books', total: 3000, available: 2800, reserved: 200 },
  { key: '7', category: 'Videos', total: 500, available: 400, reserved: 100 },
  { key: '8', category: 'Audiobooks', total: 1000, available: 800, reserved: 200 },
  { key: '9', category: 'Podcasts', total: 600, available: 500, reserved: 100 },
  { key: '10', category: 'Documents', total: 2000, available: 1800, reserved: 200 },
];

const columns = [
  { title: 'Category', dataIndex: 'category', key: 'category', align: 'center', render: text => renderIcon(text) },
  { title: 'Total', dataIndex: 'total', key: 'total', align: 'center' },
  { title: 'Available', dataIndex: 'available', key: 'available', align: 'center' },
  { title: 'Reserved', dataIndex: 'reserved', key: 'reserved', align: 'center' },
];

const renderIcon = (text) => {
  switch (text.toLowerCase()) {
    case 'books':
      return <BookOutlined />;
    case 'articles':
      return <ReadOutlined />;
    case 'research papers':
      return <DatabaseOutlined />;
    case 'magazines':
      return <ContainerOutlined />;
    case 'journals':
      return <TagOutlined />;
    case 'e-books':
      return <TagTwoTone />;
    case 'videos':
      return <HourglassOutlined />;
    case 'audiobooks':
      return <SmileOutlined />;
    case 'podcasts':
      return <SmileOutlined />;
    case 'documents':
      return <SmileOutlined />;
    default:
      return <SmileOutlined />;
  }
};


 // Example data for the line chart
 const lineChartData = [
  { month: 'Jan', visitors: 100 },
  { month: 'Feb', visitors: 200 },
  { month: 'Mar', visitors: 300 },
  { month: 'Apr', visitors: 400 },
  { month: 'May', visitors: 500 },
  { month: 'Jun', visitors: 600 },
  { month: 'Jul', visitors: 700 },
  { month: 'Aug', visitors: 800 },
  { month: 'Sep', visitors: 900 },
  { month: 'Oct', visitors: 1000 },
  { month: 'Nov', visitors: 1100 },
  { month: 'Dec', visitors: 1200 },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto flex items-center justify-center">
          {/* Avatar Image */}
          <div className="mr-8 mt-12">
            <Avatar src="https://typecast.ai/learn/wp-content/uploads/2023/02/23q1_17a.jpg" size={200} />
          </div>
          {/* Introductory Text */}
          <div className="text-left">
            <Typography.Title level={2} className="mb-4">Welcome to Free Knowledge Hub</Typography.Title>
            <Typography.Paragraph className="mb-4" ellipsis={{ rows: 4, expandable: true }}>
              Explore a vast collection of free books and articles. Find resources to enhance your knowledge in various fields.
            </Typography.Paragraph>
            <Button type="primary" size="large" className="mb-4" style={{ backgroundColor: '#1890ff', borderColor: '#1890ff' }}>
              Get Started <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </div>

      <br /><br /><br />

      {/* Features Section */}
      <div className="features-section py-12 bg-gray-100">
        <div className="container mx-auto">
          <Typography.Title level={2} className="text-center mb-8">Our System Features</Typography.Title>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="feature-item bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
                <div className="text-blue-500 text-4xl mb-4">{feature.icon}</div>
                <Typography.Title level={4} className="text-center mb-2">{feature.title}</Typography.Title>
                <Typography.Paragraph className="text-center">{feature.description}</Typography.Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pros-cons-section py-12 bg-gray-200">
      <div className="container mx-auto">
        <Typography.Title level={2} className="text-center mb-8">Pros and Cons</Typography.Title>
        <div className="flex flex-wrap justify-center">
          {/* Pros */}
          <div className="pros bg-white rounded-lg p-6 shadow-md mr-4 mb-4">
            <Typography.Title level={3} className="mb-4 text-center">Pros</Typography.Title>
            {prosConsData.pros.map((pro, index) => (
              <div key={index} className="pro-item flex items-center mb-2">
                <HeartOutlined className="text-green-500 mr-2" />
                <Typography.Text>{pro}</Typography.Text>
              </div>
            ))}
          </div>
          {/* Cons */}
          <div className="cons bg-white rounded-lg p-6 shadow-md mb-4">
            <Typography.Title level={3} className="mb-4 text-center">Cons</Typography.Title>
            {prosConsData.cons.map((con, index) => (
              <div key={index} className="con-item flex items-center mb-2">
                <CloseCircleOutlined className="text-red-500 mr-2" />
                <Typography.Text>{con}</Typography.Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      <div className="statistical-tables-section py-12 bg-gray-100">
      <div className="container mx-auto">
        <Typography.Title level={2} className="text-center text-white mb-8">Statistical Tables</Typography.Title>
        <Table
          columns={columns}
          dataSource={tableData}
          bordered
          rowClassName={(record, index) => index % 2 === 0 ? 'even-row' : 'odd-row'}
          pagination={{ pageSize: 5 }}
          className="custom-table"
        />
      </div>
    </div>

    {/* Line Chart Section
<div className="line-chart-section py-12 bg-gray-200">
  <div className="container mx-auto">
    <Typography.Title level={2} className="text-center mb-8">Monthly Visitors</Typography.Title>
    <Line data={lineChartData} />
  </div>
</div> */}

    </div>
  );
};

export default HomePage;
