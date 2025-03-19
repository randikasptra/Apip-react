import React from 'react'
import InputForm from '../Elements/Input/index'
import Button from '../Elements/Button/index';

const FormRegister  = () => {
    return (
        <form action="" className='mt-5'>
            <InputForm
                label="Full Name"
                type="text"
                placeholder="Insert your Full Name"
                name="fullName"
            />
            <InputForm
                label="Email"
                type="email"
                placeholder="example@mail.com"
                name="email"
            />
            <InputForm
                label="Password"
                type="password"
                placeholder="*******"
                name="password"
            />
            <InputForm
                label="Confirm Password"
                type="password"
                placeholder="*******"
                name="confirmPassword"
            />
            <Button classname="bg-blue-600 w-full">Register</Button>
        </form>
    )
}

export default FormRegister ;