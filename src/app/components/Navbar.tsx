import React from 'react'
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <nav className='p-4 flex justify-between items-center bg-sky-800 text-white h-25'>
            <div> <img src='/images/logo.png' width={200} height={100} /></div>

            <div>
            <ul className='flex space-x-4 text-white'>
                    <li className='hover:text-[#D52027]'><Link href="/">Home</Link></li>
                    <li className='hover:text-[#D52027]'><Link href="about">About Us</Link></li>
                    <li >Services
                    <ul>
                        <li className='hover:text-[#D52027]'><Link href="/service/app-dev">Application Dev</Link></li>
                        <li className='hover:text-[#D52027]'><Link href="/service/web-dev">Web Dev</Link></li>
                        </ul></li>
                    <li className='hover:text-[#D52027]'><Link href="contact">Contact</Link></li>
                </ul>
            </div>
            <div className='hover:text-[#D52027] text-white'>Login</div>
        </nav>
    </div>
  )
}

export default Navbar;