import React from 'react';
import { Link } from 'react-router-dom';

const HeaderLayout = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Container for centering and spacing */}
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711065600&semt=sph"
              alt="Logo"
              className="h-16 rounded-full border-2 border-gray-300"
            />
          </Link>
        </div>
        {/* Navigation Menu */}
        <nav className="text-gray-700">
          {/* Home Link */}
          <Link to="/" className="font-semibold mr-4">Home</Link>
          {/* Sign Up Link */}
          <Link to="/signup" className="font-semibold mr-4">Sign Up</Link>
          {/* Login Link */}
          <Link to="/login" className="font-semibold">Login</Link>
          {/* Add more menu items as needed */}
        </nav>
      </div>
    </header>
  );
};

export default HeaderLayout;
