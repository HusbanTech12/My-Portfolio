import image from 'next/image';
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import AchievementList from './components/Achievement';
export default function Home(){
  return(
      <main className='w-screen min-h-screen flex flex-col bg-[#101424]'>
         <Navbar /> 
       <div className="container mx-auto px-12 py-20 md:py-5">
       <HeroSection />
       <AchievementList/>  
       <AboutSection />
       <ProjectsSection />
       <EmailSection /> 
       <Footer/>
       </div>
      </main>
  )
}