import React from 'react'
import InputForm from '../Input/index'
import Button from '../Button/index';

const FormLogin = () => {
    return (
        <form action="" className='mt-5'>
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
            <Button classname="bg-blue-600 w-full">Login</Button>
        </form>
    )
}

export default FormLogin