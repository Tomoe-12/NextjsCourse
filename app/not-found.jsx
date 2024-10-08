import Link from 'next/link'
import React from 'react'

const Not_Found = () => {
  return (
    <div className='text-center'>
        <h1 className='text-3xl '>Not-Found</h1>
        <Link className='text-red-600 underline border border-red-600' href={'/'} >Go Back Home</Link>
    </div>
  )
}

export default Not_Found