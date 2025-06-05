import image from 'next/image';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'

export default function Home(){
  return(
      <main className='w-screen h-[1000px] flex  flex-col bg-black  '>
         <Navbar /> 
       <div className="container mx-auto px-12 py-20 md:py-5">
       <HeroSection />  
       <AboutSection />

       </div>
      </main>
  )
}