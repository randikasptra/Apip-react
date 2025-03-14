import React from 'react';
import Button from './components/Elements/Buttons/Button';

export default function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-slate-600">Login</h1>
          <p className='font-medium text-slate-500'> Welcome, please your details</p>
          <form action="">
          
            <div className="my-6">
              <label
                htmlFor=""
                className="block text-sm font-medium text-slate-600">
                Password
              </label>
              <input 
              type="password" 
              className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50' placeholder='******'/>
            </div>
            <Button classname="bg-blue-600 w-full">Login</Button>
          </form>
        </div>
      </div>
    </>
  )
}