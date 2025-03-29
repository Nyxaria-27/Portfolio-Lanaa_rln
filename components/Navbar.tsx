import { useState, useEffect } from 'react';
import Link from 'next/link';
import { League_Spartan } from 'next/font/google';
import { MdDarkMode, MdLightMode } from 'react-icons/md'; // Icon for Dark/Light mode
import { motion } from 'framer-motion';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State untuk dark mode

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Dark Mode toggle
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <div className={leagueSpartan.className}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out font-stretch-75% text-xl font-mono ${
          isScrolled ? '' : ''
        }`}>
        <div
          className={`flex justify-between items-center p-4 mx-3.5 mt-2.5 border-2 rounded-3xl transition-all duration-300 ease-in-out 
        ${
          isScrolled
            ? 'bg-(--primary) border-secondary shadow-lg shadow-gray-900'
            : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <div className='flex items-center'>
            <Link href='#'>
              <span
                className={`ml-2 font-bold text-2xl transition-all duration-300 ${
                  isScrolled ? 'text-secondary' : 'text-white'
                }`}>
                Laras Rizki Alana ©️
              </span>
            </Link>
          </div>

          {/* Navbar */}
          <nav className='flex space-x-6'>
            <Link
              href='#about'
              className={`hover:text-accent transition-all duration-300 ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}>
              About Me
            </Link>
            <Link
              href='#experience'
              className={`hover:text-accent transition-all duration-300 ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}>
              Experience & Skills
            </Link>
            <Link
              href='#experience'
              className={`hover:text-accent transition-all duration-300 ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}>
              Project & Hobbies
            </Link>
            <Link
              href='#contact'
              className={`hover:text-accent transition-all duration-300 ${
                isScrolled ? 'text-secondary' : 'text-white'
              }`}>
              Contact
            </Link>
            {/* Dark Mode Toggle Button */}
            <div
              className='text-white text-2xl cursor-pointer md:hidden'
              onClick={handleDarkModeToggle}>
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </div>
          </nav>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
