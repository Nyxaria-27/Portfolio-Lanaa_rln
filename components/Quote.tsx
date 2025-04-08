'use client';
import { Source_Serif_4 } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';
const SourceSerif4 = Source_Serif_4({
  display: 'swap',
  subsets: ['latin'], 
});

const Quote = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 500); // Delay biar smooth
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={SourceSerif4.className}>
      <div className=' h-[50vh] relative w-screen overflow-hidden border-y-2'>
        <div className='absolute w-full h-full'>
          <div className='absolute bg-(--accent) rounded-full w-[17vw] h-[17vw] -top-27  -right-27 z-10'></div>
          <div className=' absolute bg-(--accent) rounded-full w-[17vw] h-[17vw] -bottom-27  -left-27 z-10'></div>
        </div>
        <section
          id='Contact'
          className='group relative h-full   grayscale-75 hover:grayscale-0 flex flex-col  justify-center transition-all duration-500 ease-linear z-0'>
          <div className='text-center px-6 '>
            <div className={`mt-8 flex flex-col items-center justify-between`}>
              {/* Background Image */}
              <Image
                src='/eyes.jpg'
                alt='Eyes'
                quality={100}
                fill
                aria-hidden='true'
                loading='lazy'
                className='object-cover -z-30'
              />
              {/* Glassmorphism Quote */}
              <div
                className={` w-full mx-5  px-8 py-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl text-center shadow-gray-700 text-(--text) transition-all duration-1000 ease-out ${
                  show
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                } hover:scale-105 hover:shadow-2xl z-50 `}>
                <div className='w-full h-0.5 bg-(--text) rounded-full mb-3'></div>

                <p
                  aria-label='Negativity does not exist, it is all about positivity, right?'
                  className=' italic relative z-10  '>
                  <span className='text-5xl text-(--text) leading-none'>“</span>
                  <span className='mx-2  text-4xl text-[clamp(1rem,2vw+1rem,2.5rem)]  '>
                    Negativity does not exsist,
                    <br /> it&apos;s all about positivity, right?
                  </span>
                  <span className='text-5xl text-(--text) font-serif leading-none'>
                    ”
                  </span>
                </p>

                <div className='w-full h-0.5 bg-(--text) rounded-full mt-3'></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Quote;
