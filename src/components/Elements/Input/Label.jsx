import React from 'react'

const Label = () => {
    const { htmlFor, children } = props;
    return (
        <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-slate-600">
        {children}
      </label>
  )
}

export default Label