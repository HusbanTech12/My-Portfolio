import React from 'react'
import NavLink from './NavLink'

export default function MenuOverlay({links}) {
  return (
    <div>
        <ul className='flex flex-col py-5 items-center text-slate-100 font-semibold gap-3'>    
           {links.map((link,index) => (
     
             <li key={index}>
                <NavLink href={link.path} title={link.title} /> 
            </li>
      
    ))}
            
       
        </ul>
    </div>
  )
}
