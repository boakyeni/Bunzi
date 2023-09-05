
import './globals.css'
import { Didact_Gothic } from 'next/font/google'


const didact_gothic = Didact_Gothic({ subsets: ['latin'],
  weight : ['400']
})

export const metadata = {
  title: 'Bunzi',
  description: 'Cloud Solutions for global companies',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={didact_gothic.className}>{children}</body>
      </html>
  )
}
