import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='text-white'>

    <h2  className='w-full h-[30px] mx-auto text-center text-3xl md:text-5xl font-bold mb-5 mt-20  hover:text-emerald-500 cursor-pointer'>About Me</h2>
    <div className='grid grid-cols-1 md:grid md:grid-cols-2 items-center  py-20 px-5 gap-5'>
    
    <Image 
      src='/images/About-Image.png'
      className='rounded-lg w-full max-w-[300px] h-auto mx-auto'
      alt='about-image'
      width={400} 
      height={300}
      />
      
    <div>
        <p className='text-base sm:text-lg md:text-xl leading-relaxed '>Expert in building modern, responsive web applications using HTML, CSS, JavaScript, 
          React, Next.js, TypeScript, Tailwind CSS, and Redux. Skilled in API integration, 
          performance optimization, accessibility, responsive design, and cross-browser compatibility. 
          Experienced with Git, REST, GraphQL, and headless CMS like Sanity. I deliver clean, scalable code 
          with a strong focus on UI/UX, SEO, and fast load times.

        </p>
    </div>
    </div>
    </section>
  )
}
