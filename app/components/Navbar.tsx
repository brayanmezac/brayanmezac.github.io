import Link from 'next/link'
export default function Navbar(){
  return (
  <nav className="bg-gradient-to-l from-sky-400 via-lime-600 to-emerald-300">
    <div className="flex items-center flex justify-center items-center p-3 text-center">
      <Link href="/"><h1 className="text-2xl font-bold dark:text-white/90">Brayan Meza Castillo</h1></Link> 
    </div>
  </nav>
  )
}
