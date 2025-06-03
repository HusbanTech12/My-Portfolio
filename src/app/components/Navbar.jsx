import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (

    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto  '>
            <Link href={'/'} className='text-white text-5xl'>
            Husban
            </Link>
        
         <div className=' manu hidden md:block md:w-auto text-slate-100' id='navbar'>
           <ul>
            <li><Link href={'/'} className='block sm:text-xl'>Home</Link></li>
            
           </ul> 
            
        </div>   
      </div>
    </nav>
      
  )
}

