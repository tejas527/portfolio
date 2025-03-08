import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ProjectCard = ( { imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
        <div 
        className='h-52 md:h-72 rounded-t-xl relative group' 
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                <Link 
                href={gitUrl}
                target="_blank" rel="noopener noreferrer"
                className='h-14 w-14 border-2 relative rounded-full border-white hover:border-white group/link mr-3'>
                    <CodeBracketIcon className='h-10 w-10 text-white absolute inset-0 m-auto cursor-pointer group-hover/link:text-white'/>
                </Link>
                <Link 
                href={previewUrl}
                target="_blank" rel="noopener noreferrer"
                className='h-14 w-14 border-2 relative rounded-full border-white hover:border-white group/link'>
                    <EyeIcon className='h-10 w-10 text-white absolute inset-0 m-auto cursor-pointer group-hover/link:text-white'/>
                </Link>
            </div>
        </div>
        <div className='text-black rounded-b-xl mb-3 bg-white px-4'>
            <h5 className='font-xl font-semibold mb-2'>{title}</h5>
            <p className='text-black'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard