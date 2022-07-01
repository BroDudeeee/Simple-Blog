import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='text-xl'>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout