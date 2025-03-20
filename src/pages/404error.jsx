import React from 'react'
import { useRouteError } from 'react-router-dom'

const errorPages = () => {
    const error = useRouteError();
  return (
    <>
    <div>404error</div>
    <div>{error.message}</div>
    </>
  )
}

export default errorPages