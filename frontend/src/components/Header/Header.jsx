import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <Header>
      {/* Container for centering and spacing */}
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=sph" alt="Logo" className="h-10" />
          </Link>
        </div>
        {/* Navigation Menu */}
        <Menu theme="light" mode="horizontal" className="text-gray-700">
          {/* Home Link */}
          <Menu.Item>
            <Link to="/" className="font-semibold">Home</Link>
          </Menu.Item>
          {/* Sign Up Link */}
          <Menu.Item>
            <Link to="/signup" className="font-semibold">Sign Up</Link>
          </Menu.Item>
          {/* Login Link */}
          <Menu.Item>
            <Link to="/login" className="font-semibold">Login</Link>
          </Menu.Item>
          {/* Add more menu items as needed */}
        </Menu>
      </div>
    </Header>
  );
};

export default HeaderLayout;
