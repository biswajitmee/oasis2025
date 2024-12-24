import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import gsap from 'gsap'
import './App.css'
import HomePage from './HomePage'
import OrderOnline from './pages/OrderOnline' 
import BookTable from './pages/BookTable'
 import Menupage from './pages/Menupage'

export default function App () {
  const menuItemsRef = useRef([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Toggle Mobile Menu with Animation
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      if (!prev) {
        // Ensure refs are set before running GSAP
        setTimeout(() => {
          if (menuItemsRef.current.length > 0) {
            gsap.fromTo(
              menuItemsRef.current,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
            )
          }
        }, 50) // Small delay to ensure refs are set
      }
      return !prev
    })
  }

  return (
    <Router>
      <div className='fixBg'></div>
      <div className='relative bg-gray-100 p-4 navbar'>
        <div className='flex items-center mx-auto w-full max-w-4xl nav-items'>
          {/* Left Menu Items */}
          <div className='text-right md:flex justify-end space-x-9 hidden w-1/2'>
            <Link to='/' className='nav-item'>
              HOME
            </Link>
            <Link to='/menu' className='nav-item'>
              OUR MENU
            </Link>
          </div>

          {/* Logo */}
          <div className='flex justify-center mx-4 nav-item'>
            <div className='font-bold text-xl logo'>
              <img src='/logo.svg' alt='Logo' />
            </div>
          </div>

          {/* Right Menu Items */}
          <div className='md:flex justify-start space-x-9 hidden w-1/2 text-left'>
            <Link to='/order-online' className='nav-item'>
              ORDER ONLINE
            </Link>
            <Link to='/book-table' className='nav-item'>
              BOOK TABLE
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div
            className='block relative z-20 md:hidden cursor-pointer'
            onClick={toggleMobileMenu}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 transform transition-transform ${
                isMobileMenuOpen ? 'rotate-45 scale-110' : ''
              }`}
            >
              <div className='space-y-1'>
                <div className='bg-black w-6 h-1'></div>
                <div className='bg-black w-6 h-1'></div>
                <div className='bg-black w-6 h-1'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-90 z-10 transform transition-transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className='flex flex-col justify-center items-center space-y-8 h-full text-white'>
            {['HOME', 'OUR MENU', 'ORDER ONLINE', 'BOOK TABLE'].map(
              (item, index) => (
                <Link
                  key={index}
                  to={
                    item === 'HOME' ? '/' : item.toLowerCase().replace(' ', '-')
                  }
                  className='opacity-0 text-2xl nav-item'
                  ref={el => (menuItemsRef.current[index] = el)}
                  onClick={toggleMobileMenu}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id='main-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/menu' element={<Menupage />} />
          <Route path='/order-online' element={<OrderOnline />} />
          <Route path='/book-table' element={<BookTable />} />
        </Routes>
      </div>
    </Router>
  )
}
