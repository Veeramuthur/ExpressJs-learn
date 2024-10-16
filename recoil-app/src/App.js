// App.js
import React from 'react';
import { RecoilRoot } from 'recoil';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserRegistration from './components/UserRegistration';
import Logout from './components/Logout';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';  // Import js-cookie to manage cookies

function App() {
  const isAuthenticated = !!Cookies.get('username');  // Check if the user is authenticated by checking the cookie
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          <h1>Welcome to the App</h1>
          <Routes>
            <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;


