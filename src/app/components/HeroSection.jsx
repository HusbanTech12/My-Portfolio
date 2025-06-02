import React from 'react'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <section>
      <div className='grid grids-cols-1 lg:grid-cols-12'>
       <div className='col-span-7 palce-self-center'>
      <h1 className='text-white text-4xl lg:text-6xl font-extrabold'>Hello, I'm Husban</h1>
      <p className='text-white font-medium mt-5 text-lg lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam sunt voluptatum beatae adipisci ullam laborum, maiores enim aperiam voluptatibus autem eveniet quo consectetur cum temporibus! Sunt accusantium animi ratione?</p>
       </div>
        
        {/* Buttons */}
        <button className='w-[120px] h-[50px] my-5 p-1 
          rounded-full text-white hover:bg-gray-600 bg-emerald-400 cursor-pointer '>Hire Me</button>
        <button className='w-[150px] h-[50px] my-5 p-1 mx-5 
         bg-transparent rounded-full text-white border border-slate-500 cursor-pointer '>Download CV</button>

        {/* Hero-Image */}
       <div className='col-span-5 place-self-center '>
        <div className=' w-[250px] h-[250px] lg:w-[500px] lg:h-[400px] rounded-full bg-[#181818] my-5 relative'>

        <Image
        src='/images/hero-image.png'
        alt='hero image'
        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
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
