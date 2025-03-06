"use client";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title:"About",
        path:"about",
    },
    {
        title:"Projects",
        path:"#projects",
    },
    {
        title:"Contact",
        path:"#contact",
    }    
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false); 
            } else {
                setVisible(true); 
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    
    return (
    <nav className={`fixed top-0 left-0 right-0 z-10 bg-opacity-90 bg-[#f0e7e7] transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className='flex flex-wrap items-center justify-between mx-auto py-4 pr-4 pt-2'>
            <Link href={"/"} className='text-xl md:text-5xl text-black font-semibold'>
                LOGO
            </Link>
            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-centerpx-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-black hover:border-black'>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-centerpx-3 py-2 border rounded border-slate-900 text-slate-900 hover:text-black hover:border-black'>
                            <XMarkIcon className='h-5 w-5'/>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-8'>
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar