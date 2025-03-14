import React from 'react'

const Input = (props) => {
    const { htmlFor, children } = props;
    return (
        <input
            htmlFor={htmlFor}
            type="text"
            className='text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder:opacity-50' placeholder='example@gmail.com' />
    )
}

export default Input