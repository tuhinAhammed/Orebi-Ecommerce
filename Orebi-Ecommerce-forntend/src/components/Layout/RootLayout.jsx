import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Body/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <Outlet/>
    <Footer></Footer>
    </>
  )
}

export default RootLayout