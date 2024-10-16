// components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('username');  // Remove the username cookie
    navigate('/');  // Redirect to the login page
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
