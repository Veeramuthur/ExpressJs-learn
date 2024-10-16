// components/UserRegistration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    alert(`User Registered: ${username}`);
    setUsername('');
    setPassword('');
    navigate('/');  // Redirect to login after registration
  };

  return (
    <div>
      <h2>User Registration</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default UserRegistration;
