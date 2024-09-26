import React from "react";
import { IonButton } from '@ionic/react';
import './LoginPage.css'

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-12">
      <div className="w-full max-w-md space-y-6 sm:px-6">
        <div className="flex justify-center mb-8">
          {/* Add a logo or icon if needed */}
        </div>
        <div className="card bg-white shadow-lg rounded-lg p-6">
          <div className="card-content space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-lg font-semibold text-blue-700">Email</label>
              <input
                id="email"
                type="email"
                placeholder="maa@example.com"
                required
                className="w-full p-3 rounded-lg border-2 border-blue-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-lg font-semibold text-blue-700">Password</label>
              <input
                id="password"
                type="password"
                required
                className="w-full p-3 rounded-lg border-2 border-blue-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="card-footer mt-4">
            <IonButton expand="block" color="primary" className="w-full">
              Login
            </IonButton>
            <IonButton expand="block" color="secondary" className="w-full mt-2">
              Sign Up
            </IonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
