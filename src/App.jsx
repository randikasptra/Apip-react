import React from 'react';
import LoginPage from './pages/login';
import RegisterPage from'../src/components/Fragments/FormRegister';


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