import React from 'react'
import Label from './Label'
import Input from './Input'

const index = () => {
    const { title } = props;
    return (
        <div className="mb-6">
            <Label>{title}</Label>
            <Input type={type}/>
        </div>
    )
}

export default index;