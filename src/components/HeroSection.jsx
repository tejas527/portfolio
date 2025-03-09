"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-20'>
            <div className='col-span-13 mt-23 text-center sm:text-left '>
                <h1 className="text-black mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
                    Hello I'm Tejas, 
                    <br/>
                    {" "}
                    <TypeAnimation
                        sequence={[
                        'Web Development',
                        1000,
                        'Backend Development',
                        1000,
                        'Machine Learning',
                        1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <div className=''>
                    <Link
                    href='https://drive.google.com/file/d/1CKwO-LJYN_7atcgQILR_9g6ZFk75qpH9/view' 
                    target="_blank" rel="noopener noreferrer"
                    className='' >
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 cursor-pointer bg-black hover:bg-gray-900 text-white'>
                            Here's My Resume
                        </button>
                    </Link>
                    <Link  
                    href="mailto:tejasdumbhare@gmail.com"
                    target="_blank" rel="noopener noreferrer" 
                    className=''>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full cursor-pointer bg-black hover:bg-gray-900 text-white border border-white mt-3'>
                            Email
                        </button>
                    </Link>    
                </div>
            </div>
            <div className='col-span-6 place-self-center mt-4 lg:mt-0 lg:ml-25'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image
                        src="/images/hero-image.png"
                        alt="hero image"
                        className='absolute inset-0 m-auto w-full h-full object-cover rounded-full'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection