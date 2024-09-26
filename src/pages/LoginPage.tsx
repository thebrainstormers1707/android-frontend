import React from 'react';
import { IonButton } from '@ionic/react';
import './LoginPage.css';
import logo from './img/Logo.png' ;// Import the logo image 

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <div className="welcome-text">
        <h1>WELCOME TO</h1>
        <div className="logo">
          {/* Add the logo image here, or keep it empty */}
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className="input-container">
        <label htmlFor="username" className="input-label">USERNAME</label>
        <input
          id="username"
          type="text"
          placeholder="User@1234"
          required
          className="input-field"
        />
      </div>

      <div className="input-container">
        <label htmlFor="password" className="input-label">PASSWORD</label>
        <input
          id="password"
          type="password"
          required
          className="input-field"
        />
      </div>

      <div className="forgot-password">
        <a href="#">FORGET PASSWORD?</a>
      </div>

      <IonButton routerLink="/home" shape="round" color="primary" className="login-button ">
        LOGIN
      </IonButton>

      <div className="create-account">
        <span>DON'T HAVE ACCOUNT? </span>
      </div>
      <div className="create-account">
        <a href="#">CREATE ONE</a>
      </div>
    </div>
  );
};

export default LoginPage;
