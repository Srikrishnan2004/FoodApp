import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullname: '',
    email: '',
    createpassword: '',
    repeatpassword: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (props.mode === "login") {
      const { email, password } = formData;
      try {
        const response = await axios.post('http://192.168.56.1:5000/users/authenticate', {
          email: 'krishna@gmail.com',
          password:'asdf',
        });
        console.log(response);
        navigate("/home");
      } catch (error) {
        alert("Invalid email or password");
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form-block__input-wrapper">
        {props.mode === 'login' ? (
          <div className="form-group form-group--login">
            <Input
              type="email"
              id="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              id="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        ) : (
          <div className="form-group form-group--signup">
            <Input
              type="text"
              id="fullname"
              label="Full name"
              value={formData.fullname}
              onChange={handleChange}
            />
            <Input
              type="email"
              id="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              id="createpassword"
              label="Password"
              value={formData.createpassword}
              onChange={handleChange}
            />
            <Input
              type="password"
              id="repeatpassword"
              label="Re-enter password"
              value={formData.repeatpassword}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <button className="button button--primary full-width" type="submit">
        {props.mode === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  );
};

const Input = ({ id, type, label, value, onChange }) => (
  <input
    className="form-group__input"
    type={type}
    id={id}
    placeholder={label}
    value={value}
    onChange={onChange}
  />
);

export default LoginForm;
