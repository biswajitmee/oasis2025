import React, { useRef, useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import OrderOnline from './pages/OrderOnline';
 

export default function App() {
  const menuItemsRef = useRef([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle Mobile Menu with Animation
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      if (!prev) {
        gsap.fromTo(
          menuItemsRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 }
        );
      }
      return !prev;
    });
  };

  return (
    <>
      <div className="fixBg"></div>
      <div className="relative bg-gray-100 p-4 navbar">
        <div className="flex items-center mx-auto w-full max-w-4xl nav-items">
          {/* Left Menu Items */}
          <div className="text-right md:flex justify-end space-x-9 hidden w-1/2">
            <div className="nav-item">HOME</div>
            <div className="nav-item">OUR MENU</div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mx-4 nav-item">
            <div className="font-bold text-xl logo">
              <img src="./public/logo.svg" alt="Logo" />
            </div>
          </div>

          {/* Right Menu Items */}
          <div className="md:flex justify-start space-x-9 hidden w-1/2 text-left">
            <div className="nav-item">ORDER ONLINE</div>
            <div className="nav-item">BOOK TABLE</div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div
            className="block relative z-20 md:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 transform transition-transform ${
                isMobileMenuOpen ? 'rotate-45 scale-110' : ''
              }`}
            >
              <div className="space-y-1">
                <div className="bg-black w-6 h-1"></div>
                <div className="bg-black w-6 h-1"></div>
                <div className="bg-black w-6 h-1"></div>
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
          <div className="flex flex-col justify-center items-center space-y-8 h-full text-white">
            {['HOME', 'OUR MENU', 'ORDER ONLINE', 'BOOK TABLE'].map(
              (item, index) => (
                <div
                  key={index}
                  className="opacity-0 text-2xl nav-item"
                  ref={(el) => (menuItemsRef.current[index] = el)}
                  onClick={toggleMobileMenu}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="main-content">
        {/* <HomePage /> */}
   <OrderOnline/>
      </div>
    </>
  );
}
