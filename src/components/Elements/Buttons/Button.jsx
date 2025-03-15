import React from 'react'

const Button = (props) => {
  const { classname, children } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}>{children}</button>
  )
}

export default Button