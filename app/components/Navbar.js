import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav >
        <Link href="/" className='p-2'>Home</Link>
        <Link href="/form" className='p-2'>Dynamic Form</Link>
        <Link href="/login">Login</Link>
        <div className='py-0.5 bg-neutral-500'></div>
    </nav>
  )
}

export default Navbar