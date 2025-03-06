"use client";
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-20'>
            <div className='col-span-12 place-self-center text-center sm:text-left'>
                <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
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
                <p className='text-black text-base sm:text-lg mb-6 lg:text-xl '>
                    
                </p>
                <div className=''>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-black hover:bg-slate-800 text-white'>Here's My Resume</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-black hover:bg-slate-500 text-white border border-white mt-3'>Email</button>
                </div>
            </div>
            <div className='col-span-8 place-self-center mt-4 lg:mt-0'>
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