import React from 'react';
import LoginPage from './pages/login';
import RegisterPage from'../src/pages/register';


export default function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
          {/* <LoginPage /> */}
          <RegisterPage />  
      </div>
    </>
  )
}