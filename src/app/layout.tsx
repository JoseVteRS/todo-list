
import { Providers } from '@/app/providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Providers>
          <nav className='bg-neutral-900 p-3 mb-5' >
            <ul className='flex gap-5 items-center' >
              <li><Link href="/" className='text-pink-500' >TODO's</Link></li>
              <li> <Link href="/tecnologies" className='text-pink-500' >Tecnologies</Link></li>
            </ul>
          </nav>
          {children}
        </Providers>
      </body>
    </html>
  )
}
