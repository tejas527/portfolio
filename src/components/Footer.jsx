import React from 'react'
import Image from 'next/image'
import { SiNextdotjs } from "react-icons/si";


const Footer = () => {
  return (
    <footer className='footer text-black'>
        <div className='container flex justify-center'>
            <p>Made by Tejas</p>
        </div>
        <div className='container pb-5 flex justify-center'>
            <p>Using    </p>
            <SiNextdotjs className='text-3xl pl-2'/>
        </div>
    </footer>
  )
}

export default Footer