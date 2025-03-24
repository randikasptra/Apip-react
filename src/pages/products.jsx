import React from 'react'

const products = () => {
  return (
    <div className='flex justify-center'>
      <div className="  w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="">
          <img src="/public/shoes-1.jpg" alt="" />
        </a>
      </div>
      <div className="  w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="">
          <img src="/public/shoes-2.jpg" alt="" />
        </a>
      </div>
      <div className="  w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="">
          <img src="/public/shoes-3.jpg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default products