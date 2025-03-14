import React from 'react'
import Label from './Label'
import Input from './Input'

const index = () => {
    const { label, name } = props;
    return (
        <div className="mb-6">
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} />
        </div>
    )
}

export default index;