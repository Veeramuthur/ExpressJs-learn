// components/Dashboard.js
import React from 'react';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const username = Cookies.get('username');  // Get the logged-in user's username from the cookie

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default Dashboard;
