import React from 'react';
import InputForm from './components/Elements/Input';

export default function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-slate-600">Login</h1>
          <p className='font-medium text-slate-500'> Welcome, please your details</p>
          <form action="">
            <InputForm 
            label="email" 
            type="email" 
            placeholder="example@mail.com" 
            name="email" />
          </form>
        </div>
      </div>
    </>
  )
}