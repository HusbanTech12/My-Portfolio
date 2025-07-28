'use client'
import { useRef } from 'react';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => { 
  return (

    <section>
  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
    {/* Text Content */}
    <div className="col-span-7 place-self-center text-center sm:text-left  px-4">
      <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold">
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-white'>

        Hello, I'm <br />
        </span>
        
          <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Husban',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Front-End Developer',
        1000,
        'Next.js Developer',
        1000,
        'Pyton Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      // style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
      </h1>
      <p className="text-white font-medium mt-5 text-base sm:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta veniam sunt voluptatum.</p>

      {/* Buttons */}
      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-4">
        <button className="py-3 px-7 w-full sm:w-fit rounded-full text-white hover:bg-gray-600 bg-gradient-to-br from-red-400 via-slate-500 to-yellow-200 cursor-pointer">
          Hire Me
        </button>
        <button className="px-5 py-3 w-full sm:w-fit  bg-transparent rounded-full text-white border border-slate-500 cursor-pointer">
          Download CV
        </button>
      </div>
    </div>

    {/* Hero Image */}
    <div className="col-span-5 place-self-center">
      <div className="w-[250px] h-[250px] lg:w-[500px] lg:h-[400px] rounded-full my-5 relative">          
        
        <Image
          src="/images/About-image.png"
          alt="hero image"
          
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full object-cover"
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
