import React, { useState } from 'react';
import "./Register.css"


const Register = () => {
        

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions here
      console.log('Form submitted:', formData);
    } else {
      // Update the state with validation errors
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate password
    if (!data.password || data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    // Validate confirmPassword
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className='register'>
    <span className="registerTitle">Register</span>
      <form  className="registerForm" onSubmit={handleSubmit}>
        
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className='registerInput'
          />
        
        
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='registerInput'
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        
        
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='registerInput'
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        
        
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className='registerInput'
          />
          {errors.confirmPassword && (
            <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
          )}
    
        
          <button  className="registerButton" type="submit">Register</button>
    
      </form>
      <button  className="registerLoginButton" type="submit">Login</button>

    </div>
  )
}

export default Register