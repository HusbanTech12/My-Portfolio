import React from 'react'


interface Card{
    imgUrl : string,
    title : string,
    description : string
    
}
const ProjectCard = ({imgUrl , title , description }:Card) => {
  return (
    <>
    <div>
        {/* Image */}
      <div 
      className='w-[300px] h-52 md:h-72 rounded-t-lg'
      style={{backgroundImage: `url(${imgUrl} )` , backgroundSize: "cover" ,backgroundRepeat: 'no-repeat'}}>
      </div>

      {/* Title & description */}
      <div className='text-white'>
      <h5>Title:{title}</h5>
      <p>Description:{description}</p>

      </div>
    </div>
    </>
  )
}

export default ProjectCard
