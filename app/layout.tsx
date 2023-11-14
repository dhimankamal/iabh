import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Indian Association of Behavioural Healthcare',
  description: 'Indian Association of Behavioural Healthcare'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <Navbar /> */}
        <div>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </div>
      </body>
    </html>
  )
}
