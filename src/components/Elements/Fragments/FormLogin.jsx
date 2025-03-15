import React from 'react'
import InputForm from '../Input/Input'
import Button from '../Buttons/Button';

const FormLogin = () => {
  return (
    <form action="" className='mt-5'>
            <InputForm 
            label="email" 
            type="email" 
            placeholder="example@mail.com" 
            name="email" 
            />
            <InputForm 
            label="password" 
            type="password" 
            placeholder="*******" 
            name="password" 
            />
            <Button className="bg-blue-600 w-full mt-5">Login</Button>
    </form>
  )
}

export default FormLogin