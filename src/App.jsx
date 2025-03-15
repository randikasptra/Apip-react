import React from 'react';
import FormLogin from './components/Elements/Fragments/FormLogin';

export default function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-slate-600">Login</h1>
          <p className='font-medium text-slate-500'> Welcome, please your details</p>
          <FormLogin />
        </div>
      </div>
    </>
  )
}