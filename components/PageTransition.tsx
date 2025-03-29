'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageTransition = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsVisible(false), 1000);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='fixed inset-0 flex items-center justify-center bg-white z-50'>
      <h1 className='text-4xl font-bold'>Loading...</h1>
    </motion.div>
  );
};

export default PageTransition;
