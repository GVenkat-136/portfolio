import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import { Outlet } from 'react-router-dom'
import './Main.css'

export default function Main() {
   return (
      <div className='main_container '>
         <div className='Main_wrapper'>
            <Header />
            <Home />
            <Footer />
         </div>
      </div>
   )
}
