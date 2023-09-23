import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex  items-center justify-between '>
        Welcome to Dark Web</div>
        <Link href='/'>
        Go to Home
        </Link>

        </>
  )
}

export default page