import './globals.css'
import { Abril_Fatface, Inter } from 'next/font/google'

const abril = Abril_Fatface({ 
  weight: '400',
  subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={abril.className}>{children}</body>
    </html>
  )
}
