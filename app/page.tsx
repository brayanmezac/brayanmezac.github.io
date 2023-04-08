import { Inter } from 'next/font/google'
import Profile from './components/Profile'
import SocialButtons from './components/Social-Buttons'
import Posts from './components/Posts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <Profile/>
      <p className="mt-12 mb-12  text-3xl text-center dark:text-white" >
        Hola 👋 yo soy &nbsp;
        <span className="whitespace-nowrap"> 
          
          <span className="text-3xl font-bold text-green-500 dark:text-green-400">Brayan Meza Castillo &nbsp;</span> 
          <br/>Desarrollador WEB & XR
        </span>
      </p>
      <SocialButtons/>
      <Posts/>
    </main>
  )
}
