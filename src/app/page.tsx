import image from 'next/image';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
export default function Home(){
  return(
      <main className='w-screen h-screen flex  flex-col bg-black  '>
         <Navbar /> 
       <div className="container mx-auto px-12 py-5">
       <HeroSection />  
       </div>

      </main>
  )
}