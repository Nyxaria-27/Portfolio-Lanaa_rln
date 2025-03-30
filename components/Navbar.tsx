import { useState, useEffect } from 'react';
import Link from 'next/link';
import { League_Spartan } from 'next/font/google';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md'; // Icons
import { motion, AnimatePresence } from 'framer-motion';

const leagueSpartan = League_Spartan({ subsets: ['latin'] });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (isMenuOpen) {
        setIsMenuOpen(false); // Tutup menu saat scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
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
          className={`flex justify-between items-center p-4 mx-3.5 mt-2.5 border-2 rounded-3xl transition-all duration-300 ease-in-out ${
            isScrolled
              ? 'bg-(--primary) border shadow-lg shadow-gray-900'
              : 'bg-transparent border-transparent text-white'
          }`}>
          <Link href='#'>
            <span className='ml-2 font-bold text-2xl cursor-pointer'>
              Laras Rizki Alana ©️
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-6'>
            {[
              'About Me',
              'Experience & Skills',
              'Project & Hobbies',
              'Contact',
            ].map((item, index) => (
              <Link
                key={index}
                href={`#${item
                  .toLowerCase()
                  .replace(/ & /g, '')
                  .replace(/ /g, '')}`}
                className='hover:text-accent transition-all duration-300 '>
                {item}
              </Link>
            ))}
            <div
              className=' text-2xl cursor-pointer'
              onClick={handleDarkModeToggle}>
              {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
            </div>
          </nav>
          {/* Mobile Menu Button */}
          <div
            className='md:hidden text-2xl cursor-pointer p-0.5 rounded-2xl hover:bg-gray-400'
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <MdClose /> : <MdMenu />}
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed  left-0 flex-wrap w-full h-[50vh] bg-(--primary) flex flex-col items-center md:hidden z-70 ${
              isScrolled ? 'bg-transparent px-3.5' : 'bg-white'
            }`}>
            <MdClose
              className='md:hidden text-3xl cursor-pointer absolute top-5 right-7 rounded-2xl hover:bg-gray-500 p-0.5'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div
              className={`flex flex-col items-center p-6 w-full mt-2.5 border-2 rounded-3xl space-y-4 transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'bg-(--primary) border shadow-lg shadow-gray-900'
                  : 'bg-transparent border-transparent'
              }`}>
              {[
                'About Me',
                'Experience & Skills',
                'Project & Hobbies',
                'Contact',
              ].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item
                    .toLowerCase()
                    .replace(/ & /g, '')
                    .replace(/ /g, '')}`}
                  className='text-lg w-full text-center rounded-2xl hover:bg-gray-500 mt-2 transition-all duration-300'
                  onClick={() => setIsMenuOpen(false)}>
                  {item}
                </Link>
              ))}
              <div
                className='flex flex-col items-center text-2xl cursor-pointer w-full rounded-2xl hover:bg-gray-500'
                onClick={handleDarkModeToggle}>
                {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
