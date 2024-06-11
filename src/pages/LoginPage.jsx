import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import './LoginPage.css';

const LoginComponent = (props) => {
  const [mode, setMode] = useState(props.mode);
  const navigate = useNavigate();

  useEffect(() => {
    setMode(props.mode); // Reset mode when props.mode changes
  }, [props.mode]);

  const toggleMode = () => {
    const newMode = mode === 'login' ? 'signup' : 'login';
    setMode(newMode);
  };

  return (
    <div className={`app app--is-${props.mode}`}>
      <div className={`form-block-wrapper form-block-wrapper--is-${mode}`}></div>
      <section className={`form-block form-block--is-${mode}`}>
        <header className="form-block__header">
          <h1>{mode === 'login' ? 'Welcome back!' : 'Sign up'}</h1>
          <div className="form-block__toggle-block">
            <span>
              {mode === 'login' ? "Don't" : 'Already'} have an account? Click here &#8594;
            </span>
            <input
              id="form-toggler"
              type="checkbox"
              onClick={toggleMode}
            />
            <label htmlFor="form-toggler"></label>
          </div>
        </header>
        <LoginForm mode={mode} onSubmit={props.onSubmit} />
      </section>
    </div>
  );
};

export default LoginComponent;
