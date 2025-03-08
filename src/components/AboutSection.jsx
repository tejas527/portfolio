"use client";
import React, { useTransition, useState } from 'react'
import TabButtion from './TabButtion';
import ToolsCard from './ToolsCard';
import { SiNextdotjs } from "react-icons/si";

const TAB_DATA = [
    {
        title:"Education",
        id:"education",
        content: (
            <ul>
                <li className='font-bold list-disc pl-2'>B.Tech. Computer Science and Engineering </li>
                <li>S.R.M. Institue of Science and Technology, KTR</li> 
                <li className='font-bold list-disc pl-2'>High School  </li>
                <li>Namo Rims Junior College, Pune </li>
                <li className='font-bold list-disc pl-2'>Middle School </li>
                <li>Pawar Public School, Pune</li>
            </ul>
        )
    },
    {
        title:"Certifications",
        id:"certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>NPTEL in Java</li>
            </ul>
        )
    },
    {
        title:"Experience",
        id:"experience",
        content: (
            <ul className='list-disc pl-2'>
                <li>C</li>
            </ul>
        )
    },
]

const skills = [
    { name: "C", src: "icons8-c.svg" }, 
    { name: "C++", src: "icons8-c++.svg" }, 
    { name: "Java", src: "icons8-java.svg" }, 
    { name: "MySQL", src: "icons8-mysql.svg" }, 
    { name: "PostgreSQL", src: "icons8-postgresql.svg" }, 
    { name: "JavaScript", src: "icons8-javascript.svg" },
    { name: "React", src: "icons8-react.svg" }, 
    { name: "Node.js", src: "icons8-node-js.svg" }, 
    { name: "Express", src: "icons8-express-js.svg" },
    { name: "Next.js", jsx: <SiNextdotjs className='text-4xl'/> },
    { name: "TailwindCSS", src: "icons8-tailwindcss.svg" },
    { name: "Python", src: "icons8-python.svg" },
];

const AboutSection = () => {
    const [tab, setTab] = useState("education");
    const [isPending ,startTransition ] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
    <section className='text-black'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0'>
            <div className='container'>
                <h2 className="text-3xl font-bold mb-4">
                    Tools I use
                </h2>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
                    {skills.map((skill, index) => (
                        <ToolsCard key={index} name={skill.name} icon={skill.src || skill.jsx} />
                    ))}
                </div>
            </div>  
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
                 Express.js, PostgreSQL, and 
                 Python.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButtion selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        Education
                    </TabButtion>
                    <TabButtion selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                        Certification
                    </TabButtion>
                    <TabButtion selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                        Experience
                    </TabButtion>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection