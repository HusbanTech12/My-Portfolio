import React from 'react';
import Link from 'next/link';

interface Card{
    imgUrl : string,
    title : string,
    description : string
    link?: string,
    
}
const ProjectCard = ({imgUrl , title , description , link = '#' }:Card) => {
  return (
    <>
    <div className='w-[300px]'>
      {/* Wrap image with link */}
  
     <Link href={link} passHref >
     
        {/* Image */}
      <div 
      className='w-[300px] h-52 md:h-72 rounded-t-lg relative group '
      style={{backgroundImage: `url(${imgUrl} )` , backgroundSize: "cover" ,backgroundRepeat: 'no-repeat'}}>
      </div>
        </Link>  

      {/* Title & description */}
      <div className='text-white overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500' >
      <h5 className='font-bold mt-3 text-2xl text-purple-400'>{title}</h5>
      <p className='font-bold mt-3 text-lg text-fuchsia-2 00'>{description}</p>

      </div>
    </div>
    </>
  )
}

export default ProjectCard
