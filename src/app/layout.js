import { Rubik } from 'next/font/google'
import HeaderMain from '@/components/layout/HeaderMain'
import './globals.css'

const rubik = Rubik({
   subsets: ['latin'],
})

export const metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
   return (
      <html lang="es">
         <body className={rubik.className}>
            
            <HeaderMain />
            {children}
          
         </body>
      </html>
   )
}
