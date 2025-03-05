import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id:1,
        title:"Next.js Portfolio Website",
        description: "Portfolio Website",
        image: "/images/projects/1.png",
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"React Weather Website",
        description: "Real-time Weather dashboard",
        image: "/images/projects/2.png",
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"E-commerce Application",
        description: "Project 3 description",
        image: "/images/projects/4.png",
        gitUrl:"/",
        previewUrl:"/"
    }
]

const ProjectsSection = () => {
  return (
    <div>
        <h2 className='text-black flex justify-center mb-2 font-bold text-3xl'>My Projects</h2>
        <div className=''>
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