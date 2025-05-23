import React from 'react';
import AuthLayouts from '../components/layouts/AuthLayouts';
import FormLogin from '../components/Fragments/FormLogin';

const LoginPage = () => {
  return (
    <>
      <AuthLayouts title="Login" type='Register'>
        <FormLogin />
      </AuthLayouts>
    </>
  )
}

export default LoginPage;