import image from 'next/image';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection';

export default function Home(){
  return(
      <main className='w-screen min-h-screen flex flex-col bg-black  '>
         <Navbar /> 
       <div className="container mx-auto px-12 py-20 md:py-5">
       <HeroSection />  
       <AboutSection />
       <ProjectsSection />

       </div>
      </main>
  )
}