import React, { useState } from 'react';
import './signup.css';

const Signup = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props?.setUser(true)
  };

  const toggleForm = () => {
    setIsLogin(!isLogin); 
  };

  return (
    <div className="signup-container">
      <div className="card">
        <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
        </form>
        <p>
          {isLogin
            ? 'Don\'t have an account? '
            : 'Already have an account? '}
          <span onClick={toggleForm} className="toggle-link">
            {isLogin ? 'Sign Up' : 'Log In'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
