// components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook to programmatically navigate

  const handleLogin = () => {
    // Mock login validation
    if (username === 'admin' && password === 'password') {
      Cookies.set('username', username);  // Store username in cookie
      navigate('/dashboard');  // Redirect to the dashboard after login
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
