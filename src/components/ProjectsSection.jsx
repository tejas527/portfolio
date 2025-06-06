import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id:1,
        title:"Next.js Portfolio Website",
        description: "Portfolio Website",
        image: "/images/projects/1.png",
        gitUrl:"https://github.com/tejas527/portfolio",
        previewUrl:"https://tejasdumbhare-profile.vercel.app/"
    },
    {
        id:2,
        title:"React Weather Website",
        description: "Real-time Weather dashboard",
        image: "/images/projects/chennai-w-new.png",
        gitUrl:"https://github.com/tejas527/weather-app",
        previewUrl:"/"
    },
]

const ProjectsSection = () => {
  return (
    <div>
        <h2 className='text-center text-4xl font-bold text-black mt-4 mb-5 md:mb-5'>My Projects</h2>
        <div className='grid md:grid-cols-3 gap-5 md:gap-8'>
            {projectsData.map((project) => 
                <ProjectCard 
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image} 
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                />
            )}
        </div>
    </div>
  )
}

export default ProjectsSection
