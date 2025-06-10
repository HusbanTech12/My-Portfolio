import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectData = [
  {
    id : 1,
    title: 'E-Commerce-Store',
    description :'I Create E-Commerce Store by using Next.js ,TailwindCss and Typescript',
    image:'/projects/img1.jpg'
  },

  {
    id : 2,
    title: 'Figma-Design',
    description :'I Create Figma Design by using Next.js ,TailwindCss and Typescript',
    image:'/projects/img2.jpg'
  },

  {
    id : 3,
    title: 'Password-Generator',
    description :'I Create Password Generator by using Python',
    image:'/projects/img3.jpg'
  },

  {
    id : 4,
    title: 'Unit-Convertor',
    description :'I Create Unit Convertor by using Python',
    image:'/projects/img4.jpg'
  },

]



export default function ProjectsSection() {
  return (
    <>
    <h2 className='text-white text-center text-4xl font-bold mx-auto mb-16 hover:text-emerald-500 cursor-pointer'>My Project</h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
      {ProjectData.map((project )=> <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}/>)}


    </div>
    </>
  )
}
