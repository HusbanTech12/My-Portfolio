'use client'

import React , {useState} from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay'
  const NavLinks = [
    {
      title: 'About',
      path: '#about',
    },

    {
      title: 'Projects',
      path: '#project',
    },

    {
      title: 'Contact',
      path: '#contact',
    },


  ] 
export default function Navbar() {

  const [navbarOpen,setNavbarOpen] = useState(false);

  
  return (

    <nav className='fixed top-0 left-0 right-0 z-10 bg-black bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-3 py-3 '>
            <Link href={'/'} className=' mx-5 text-2xl md:text-5xl text-white font-semibold'>
            Husban
            </Link>

            <div className='mobile-menu block md:hidden'>
            {!navbarOpen ? (
                <button 
                 onClick={() => setNavbarOpen(true)} 
                 className='flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200'>
                  <Bars3Icon className='h-5 w-5'/> 
                  </button>

              ):(
                <button
                onClick={() => setNavbarOpen(false)}
                className='flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200'>
                  <XMarkIcon   className='h-5 w-5'/> 
                  </button>
              )
            }
               
                      
            </div>
        
         <div className=' manu hidden md:block md:w-auto text-slate-100' id='navbar' >
           <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 '>
             {
              NavLinks.map((link,index) =>(
              <li key={index}>
                <NavLink  href={link.path} title={link.title} />
              </li>

              )
              
              
              
              
              )
             }
            
           </ul> 
            
        </div>   
      </div>
      {navbarOpen ? <MenuOverlay links={NavLinks} />  : null}
    </nav>
      
  )
}

