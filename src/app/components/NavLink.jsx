import Link from 'next/link'

const NavLink = ({href , title}) =>{
    return(
       
        <Link href={href}

        className='block sm:text-xl rounded md:p-0'>
            {title}
        
       </Link>

    )
}

export default NavLink