import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='text-white'>

        <h2  className='w-[800px] h-[30px] text-5xl font-bold mb-5 mt-20  hover:text-green-400 text-center'>About Me</h2>
    <div className='md:grid md:grid-cols-2 items-center  py-20 px-5 '>
    <div>
    <Image 
      src='/images/About-Image.png'
      className='rounded-lg'
      alt='about-image'
      width={300} 
      height={300}
      />
      </div>

    <div>
        <p className='text-xl'>Expert in building modern, responsive web applications using HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind CSS, and Redux. Skilled in API integration, performance optimization, accessibility, responsive design, and cross-browser compatibility. Experienced with Git, REST, GraphQL, testing (Jest, Cypress), and headless CMS like Sanity. I deliver clean, scalable code with a strong focus on UI/UX, SEO, and fast load times.

        </p>
    </div>
    </div>
    </section>
  )
}
