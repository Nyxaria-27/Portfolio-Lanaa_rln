import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from 'react-icons/md'; // Icons
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  {
    /* Navbar Link Effect */
  }
  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Ambil semua section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Simpan ID section yang terlihat
          }
        });
      },
      { threshold: 0.5 } // Section dianggap aktif jika setengahnya terlihat
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out font-stretch-75% text-xl font-mono ${
          isScrolled ? '' : ''
        }`}>
        <div
          className={`flex justify-between items-center p-4 mx-3.5 mt-2.5 border-2 rounded-3xl transition-all duration-300 ease-in-out ${
            isScrolled
              ? 'bg-(--background) border-(--stroke) text-(--text) shadow-lg shadow-gray-900 dark:shadow-gray-700'
              : 'bg-transparent border-transparent text-(--primary)'
          }`}>
          <Link href='#' className=' ml-2 flex items-center'>
            <Image
              src='/favicon.svg'
              alt='L'
              quality={100}
              width={45}
              height={45}
              data-nimg={1}
              className={`  transition duration-300 ease-in-out   ${
                isScrolled ? '  ' : 'invert brightness-0'
              } ${isDarkMode ? 'invert brightness-0' : ''}`}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px'
            />
            <span className='-ml-4 font-bold text-2xl cursor-pointer'>
              aras Rizki Alana ©️
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-6'>
            {[
              'About Me',
              'Experience & Skills',
              'Project & Resume',
              'Contact',
            ].map((item, index) => (
              <ul key={index} className='relative'>
                <li>
                  <Link
                    key={index}
                    href={`#${item
                      // .toLowerCase()
                      .replace(/ & /g, 'and')
                      .replace(/ /g, '')}`}
                    className={`hover:text-(--accent) transition-all duration-300 pb-1 before:content-[''] before:absolute before:bottom-[-6px] before:right-0 
                    before:w-full before:h-[3px] before:bg-(--accent) before:rounded-md 
                    before:scale-x-0 before:origin-left before:transition-transform before:duration-500 
                    ${
                      activeSection ===
                      item.replace(/ & /g, 'and').replace(/ /g, '')
                        ? 'before:scale-x-100 before:origin-right' // Garis bawah jika aktif
                        : ''
                    }`}>
                    {item}
                  </Link>
                </li>
              </ul>
            ))}
            <div
              className=' text-2xl cursor-pointer hover:text-(--secondary)'
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
            className={`fixed text-(--text) left-0 flex-wrap w-full h-fit  bg-(--backgound) flex flex-col items-center md:hidden px-3.5 z-70 ${
              isScrolled ? 'bg-transparent' : ' bg-(--background)'
            }`}>
            <MdClose
              className='md:hidden text-3xl cursor-pointer absolute top-5 right-7 rounded-2xl hover:bg-gray-500 p-0.5'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <div
              className={`flex flex-col items-center p-6 w-full mt-2.5 border-2 rounded-3xl space-y-4 mb-1 transition-all duration-300 ease-in-out ${
                isScrolled
                  ? 'bg-(--background) border-(--stroke) shadow-lg shadow-gray-900 dark:shadow-gray-700'
                  : 'bg-transparent border-transparent'
              }`}>
              {[
                'About Me',
                'Experience & Skills',
                'Project & Resume',
                'Contact',
              ].map((item, index) => (
                <Link
                  key={index}
                  href={`#${item
                    // .toLowerCase()
                    .replace(/ & /g, 'and')
                    .replace(/ /g, '')}`}
                  className={`text-lg w-full text-center rounded-2xl  hover:bg-gray-700 mt-2 transition-all duration-300 pb-1 ${
                    activeSection ===
                    item.replace(/ & /g, 'and').replace(/ /g, '')
                      ? 'border-b-2 border-(--accent)' // Garis bawah jika aktif
                      : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}>
                  {item}
                </Link>
              ))}
              <div
                className='flex flex-col items-center text-2xl cursor-pointer w-full rounded-2xl hover:text-(--secondary) hover:bg-gray-700'
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
