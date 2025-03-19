import React from 'react';
import AuthLayouts from '../components/layouts/AuthLayouts';
import FormRegister from '../components/Fragments/FormRegister';

const RegisterPage = () => {
  return (
    <>
      <AuthLayouts title="Register">
        <FormRegister />
      </AuthLayouts>
    </>
  )
}

export default RegisterPage;