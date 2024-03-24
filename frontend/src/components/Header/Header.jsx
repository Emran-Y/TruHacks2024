import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthProvider';
import { HomeOutlined, UserOutlined, LoginOutlined, LogoutOutlined, UserAddOutlined, InfoCircleOutlined, SearchOutlined, DashboardOutlined, ContactsOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const HeaderLayout = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div>
          <Link to="/">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=sph"
              alt="Logo"
              className="h-16 rounded-full border-2 border-gray-300"
            />
          </Link>
        </div>
        <Menu mode="horizontal" theme="light">
          {isLoggedIn ? (
            <>
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                <Link to="/about">About Us</Link>
              </Menu.Item>
              <Menu.Item key="search" icon={<SearchOutlined />}>
                <Link to="/search">Search</Link>
              </Menu.Item>
              <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                <Link to="/dashboard">Dashboard</Link>
              </Menu.Item>
              <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
                Logout
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item key="login" icon={<LoginOutlined />}>
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="signup" icon={<UserAddOutlined />}>
                <Link to="/signup">Sign Up</Link>
              </Menu.Item>
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                <Link to="/about">About Us</Link>
              </Menu.Item>
              <Menu.Item key="contact" icon={<ContactsOutlined />}>
                <Link to="/contact">Contact</Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </div>
    </header>
  );
};

export default HeaderLayout;
