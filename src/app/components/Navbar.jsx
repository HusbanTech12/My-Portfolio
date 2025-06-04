import React , {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

  const NavLinks = [
    {
      title: 'About',
      path: '#about'
    },

    {
      title: 'Projects',
      path: '#project'
    },

    {
      title: 'Contact',
      path: '#contact'
    },


  ] 
export default function Navbar() {
  
  return (

    <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto  '>
            <Link href={'/'} className=' mx-5 text-2xl md:text-5xl text-white font-semibold'>
            Husban
            </Link>
        
         <div className=' manu hidden md:block md:w-auto text-slate-100' id='navbar' >
           <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>
             {
              NavLinks.map((link,index) =>(
              <li key={index}>
                <NavLink  href={link.path} title={link.title}  />


              </li>

              )
              
              
              
              
              )
             }
            
           </ul> 
            
        </div>   
      </div>
    </nav>
      
  )
}

