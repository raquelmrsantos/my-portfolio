'use client';

import React, { useState, useEffect } from 'react';

const navItems = [
  { name: '[ Home ]', href: '#home' },
  { name: '[ About Me ]', href: '#about' },
  { name: '[ Experience ]', href: '#experience' },
  { name: '[ Connect ]', href: '#connect' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);

    const element = document.querySelector(href);
    if (element && element instanceof HTMLElement) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 mix-blend-difference'>
        <div className='mx-auto px-4 md:px-8 lg:px-16'>
          <div className='flex justify-between items-center h-16 md:h-20'>
            <button
              onClick={() => handleNavClick('#home')}
              className='cursor-pointer font-bold uppercase leading-[0.7] text-[8vw] md:text-[6vw] lg:text-[4vw] xl:text-[3vw] 2xl:text-[2.5rem] overflow-hidden text-white'
              style={{
                fontFamily: 'Sofia Sans Condensed, sans-serif',
                letterSpacing: '-0.1em',
                fontWeight: 700,
                maxWidth: '50vw',
              }}
            >
              Raquel Santos
            </button>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-8'>
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className='cursor-pointer text-sm font-light tracking-wide uppercase text-white hover:opacity-70 transition-opacity'
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div
              className='hidden md:block text-sm font-light tracking-wide uppercase cursor-pointer text-white hover:opacity-70 transition-opacity'
              onClick={() => handleNavClick('#contact')}
            >
              Contact me
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button
                onClick={toggleMobileMenu}
                className='hamburger'
                aria-label='Toggle menu'
              >
                <span className={isMobileMenuOpen ? 'open' : ''}></span>
                <span className={isMobileMenuOpen ? 'open' : ''}></span>
                <span className={isMobileMenuOpen ? 'open' : ''}></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.href)}
            className='mobile-menu-item elegant-link'
            style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
}
