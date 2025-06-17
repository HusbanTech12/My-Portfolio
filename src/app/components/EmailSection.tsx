import React from 'react'
import GithubIcon from '../../../public/github-svgrepo-com.svg'
import LinkedinIcon from '../../../public/linkedin-color-svgrepo-com.svg'
import Link from 'next/link';
import Image from 'next/image';



const EmailSection = () => {

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form =  e.currentTarget;  
    const data = {
      email: (form.email as HTMLInputElement).value,
      subject: (form.subject as HTMLInputElement).value,
        message: (form.message as HTMLInputElement).value,
    
    }        
  }




  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
      <div>
        <h5 className='text-2xl font-bold text-white'>Let's Connect</h5>
      <p className='text-white font-semibold py-5 pr-5'>If you have any questions, ideas, or just want to say hello, feel free to reach out. I'm always open to discussing new projects, creative ideas, 
      or opportunities to be part of your vision. Just drop a message and I'll get back to you as soon as possible!
     </p>  
<div className='socials flex flex-row gap-5'>
 <Link href='https://github.com/HusbanTech12'>
 <Image  src={GithubIcon} alt='Github Icon' className='w-12'/>
 </Link >
 
  <Link href='https://www.linkedin.com/in/husban-tech-495356347/'>
 <Image  src={LinkedinIcon} alt='Linkedin Icon' className='w-12' />
 </Link >

</div>
     </div>

     {/* Form */}
       <div>

    <form className="flex flex-col gap-4">
      
    <label htmlFor="email" className='text-white text-xl block font-medium'>Your Email</label>

    <input 
    type="email" 
    id="email"  
    required 
    placeholder='husban786@gmail.com'
    className='bg-black font-normal border-[2px] border-gray-500 rounded-lg  px-3 py-1 text-blue-400 text-sm placeholder-gray-800'
    />

    <label htmlFor="text" className='text-white text-xl block font-medium mt-3'>Subject</label>

    <input 
    type="text" 
    id="Subject"  
    required 
    placeholder='Enter your subject'
    className='bg-black font-normal border-[2px] border-gray-500 rounded-lg px-3 py-1 text-blue-400 text-sm placeholder-gray-800'
    />
    
    <label htmlFor="text" className='text-white text-xl block font-medium mt-3'>Message</label>

    <textarea 
       name="Message"
       id="Message"
       placeholder='Enter Your Message'
       required
       className='bg-black font-normal border-[2px] border-gray-500 rounded-lg text-blue-400 text-sm placeholder-gray-800 px-2 py-1 w-full h-36'
        />

        <div>
          <button type='submit' className='w-full bg-blue-800 py-2 font-bold hover:bg-blue-600 font-mono text-pink-300 rounded-xl '>Summit Message</button>
        </div>
     </form>

       </div>
    </section>
  )
}

export default EmailSection
