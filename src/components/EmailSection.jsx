import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from 'next/link'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-8 md:my-8 py-12 gap-4'> 
        <div className=''>
            <h5 className='text-2xl font-bold text-black my-2'>
                Let's Connect
            </h5>
            <p className='text-[#181818] mb-4 max-w-md'>
                {" "}
                I'm currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you! 
            </p>
        </div>
        <div className='flex flex-col gap-4  text-black'>
          <h5 className='text-2xl font-bold text-black my-2'>
            Contact Me
          </h5>
          <div>
            <p className='font-bold'>Email</p>
            <Link 
            href="mailto:tejasdumbhare@gmail.com" 
            className='text-blue-700 hover:text-blue-600'>
              tejasdumbhare@gmail.com</Link>
          </div>
          <div>
            <p className='font-bold'>Location</p>
            Chennai, India
          </div>
          <p className='font-bold'>
            Social Media
          </p>
          <div className='socials flex flex-row gap-2'>
              <Link 
                href="https://github.com/tejas527">
                <FaGithub className="text-3xl text-gray-800 hover:text-black"/>
              </Link>
              <Link 
                href="github.com">
                <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-800"/>
              </Link>
              <Link 
                href="github.com">
                <FaInstagram className="text-3xl text-pink-500 hover:text-pink-600"/>
              </Link>
              <Link 
                href="github.com">
                <FaTwitter className="text-3xl text-blue-400 hover:text-blue-500"/>
              </Link>
            </div>
      </div>
    </section>   
  )
}

export default EmailSection