import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={"/"} className='text-5xl text-black font-semibold'>
                LOGO
            </Link>
            <div className='menu hidden md:block md'>
                <ul>
                    <li>
                        <Link 
                            href={"#about"} 
                            className='block py-2 pl-3 pr-4 text-[#4a4f53] rounded md:p-0 hover:text-black'
                            >
                                About
                            </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar