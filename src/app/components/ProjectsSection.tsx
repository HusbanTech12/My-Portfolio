import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectData = [
  {
    id : 1,
    title: 'E-Commerce-Store',
    description :'I Create E-Commerce Store by using Next.js ,TailwindCss and Typescript',
    image:"/images/img1.jpg",
    link : 'https://my-store-ten-lovat.vercel.app/'
  },

  {
    id : 2,
    title: 'Figma-Design',
    description :'I Create Figma Design by using Next.js ,TailwindCss and Typescript',
    image:"/images/img2.jpg",
    link : 'https://husbanshah97.github.io/figma-design/'
  },

  {
    id : 3,
    title: 'Password-Generator',
    description :'I Create Password Generator by using Python',
    image:"/images/img3.jpg",
    link : 'https://github.com/HusbanTech12/Password-Generator'
  },

  {
    id : 4,
    title: 'Unit-Convertor',
    description :'I Create Unit Convertor by using Python',
    image:"/images/img4.jpg",
    link : 'https://husbantech12-unit-converter-unit-converter-e5azov.streamlit.app/'
  },

   {
    id : 5,
    title: 'Figma-Design',
    description :'I Create Figma Design by using Next.js ,TailwindCss and Typescript',
    image:"/images/img3.jpg",
    link : 'https://my-store-ten-lovat.vercel.app/'
  },

  {
    id : 6,
    title: 'Static-Resume',
    description :'I Create E-Commerce Store by using Next.js ,TailwindCss and Typescript',
    image:"/images/img1.jpg",
    link :'https://husbantech12.github.io/Static-Resume/'
  },

]



export default function ProjectsSection() {
  return (
    <>
    <h2 className='text-white text-center text-4xl font-bold mx-auto mb-16 hover:text-emerald-500 cursor-pointer'>My Project</h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
      {ProjectData.map((project )=> 
      <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description} 
      imgUrl={project.image}
      link={project.link}
      />)}

    </div>
    </>
  )
}
