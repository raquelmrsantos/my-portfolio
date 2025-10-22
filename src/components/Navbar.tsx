'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

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
      <nav className='fixed top-0 left-0 w-full z-50 mix-blend-difference py-[25px] lg:py-[37px] pointer-events-none'>
        <div className='mx-auto px-4 md:px-8 lg:px-16 pointer-events-auto'>
          <div className='flex justify-between items-center'>
            <button
              onClick={() => handleNavClick('#home')}
              className='cursor-pointer font-bold uppercase leading-[0.7] font-sofia-sans-condensed overflow-hidden relative z-[101] text-2xl lg:text-[40px] tracking-[-1px] lg:tracking-[-3px] w-[90px] lg:w-[135px] text-white'
            >
              Raquel Santos
            </button>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-8 font-spline-sans-mono'>
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className='cursor-pointer text-base tracking-wide uppercase text-white hover:opacity-70 transition-opacity'
                >
                  <AnimatedText text={item.name} />
                </button>
              ))}
            </div>

            <div
              className='hidden md:block text-base font-spline-sans-mono ©tracking-wide uppercase cursor-pointer text-white hover:opacity-70 transition-opacity'
              onClick={() => handleNavClick('#contact')}
            >
              Contact me <ArrowUpRight className='inline' />
            </div>

            {/* Mobile menu button - Changed to text */}
            <div className='md:hidden relative z-[101]'>
              <button
                onClick={toggleMobileMenu}
                className={`font-spline-sans-mono text-base tracking-wide uppercase hover:opacity-70 transition-all ${
                  isMobileMenuOpen ? 'text-black' : 'text-white mix-blend-difference'
                }`}
                aria-label='Toggle menu'
              >
                [ MENU ]
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        {isMobileMenuOpen && (
          <button
            onClick={toggleMobileMenu}
            className='fixed top-[25px] right-4 z-[102] text-black font-spline-sans-mono text-base tracking-wide uppercase hover:opacity-70 transition-opacity'
            aria-label='Close menu'
          >
            [ CLOSE ]
          </button>
        )}

       {navItems.map((item, index) => (
          <button
            key={item.name}
            onClick={() => handleNavClick(item.href)}
            className='mobile-menu-item font-sofia-sans-condensed font-bold'
            style={{ transitionDelay: `${0.1 + index * 0.05}s` }}
          >
            {item.name.replace(/\[|\]/g, '').trim()}
          </button>
        ))}
      </div>
    </>
  );
}