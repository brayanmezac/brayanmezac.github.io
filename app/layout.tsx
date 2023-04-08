import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Brayan Meza Castillo',
  description: 'este es mi sitio web personal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className='dark:bg-zinc-900'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
