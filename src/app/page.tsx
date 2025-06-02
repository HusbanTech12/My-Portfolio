import image from 'next/image';
import HeroSection from './components/HeroSection'
export default function Home(){
  return(
      <main className='flex min-h-screen flex-col bg-black container mx-auto px-12 py-5'>
       <h1><HeroSection /> </h1>
      </main>
  )
}