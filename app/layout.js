import './globals.css'
import Navbar from '@/components/Navbar'
import Screens from '@/components/Screens'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className="min-w-screen min-h-screen flex-col justify-between">
        <Screens/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
