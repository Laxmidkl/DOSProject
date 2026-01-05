import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = () => {
  return (
    <div>
        <div className="fixed top-0 left-0 w-full z-50">
        <Navbar/>
        </div>

         <main className=' mt-16'>
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}

export default Layout