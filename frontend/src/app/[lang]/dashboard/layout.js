import '../../globals.css'


export const metadata = {
  title: 'Bunzi Cloud Dashboard',
  description: 'User Dashboard',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}
export default function Layout({ children, analytics }) {
  return (
        <div className='grid grid-cols-5'>
        {children}
        {analytics}
        </div>
  )
}