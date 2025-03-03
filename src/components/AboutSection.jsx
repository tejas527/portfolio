"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButtion from './TabButtion';

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>C</li>
                <li>C++</li>
                <li>Java</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li>Python</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content: (
            <ul>
                <li className='text-bold'>B.Tech. Computer Science and Engineering </li>
                <li>S.R.M. Institue of Science and Technology, KTR</li> 
                <li className='text-bold'>High School  </li>
                <li>Namo Rims Junior College, Pune </li>
                <li className='text-bold'>Middle School </li>
                <li>Pawar Public School, Pune</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id:"certifications",
        content: (
            <ul>
                <li>NPTEL in Java</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending ,startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
    <section className='text-black'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
            src="/images/about-image.png" 
            alt=""
            width={500} 
            height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-black mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                I’m a passionate Machine Learning 
                Enthusiast and Full-Stack Developer,
                 currently pursuing my Computer 
                 Science Engineering degree at 
                 SRMIST. I specialize in building 
                 intelligent and scalable 
                 applications using JavaScript, 
                 React, Next.js, Node.js, 
                 Express.js, PostgreSQL, 
                 Python, and TensorFlow.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButtion selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        Skills
                    </TabButtion>
                    <TabButtion selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        Education
                    </TabButtion>
                    <TabButtion selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        Certification
                    </TabButtion>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection