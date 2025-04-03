'use client';
import {useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useIsomorphicLayoutEffect } from '@react-hookz/web'; // Install: npm install @react-hookz/web
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const tagRef = useRef(null); // Tag informasi tambahan

  useIsomorphicLayoutEffect(() => {
  if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: 'hero', // ✅ Tambahkan ID
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
        },
      });

      tl.to(bgRef.current, {
        scale: 0.9,
        borderRadius: '20px',
        duration: 1,
      });

      // Hilangkan tag tambahan ketika scroll turun
      tl.to(tagRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
      });

      tl.to(contentRef.current, {
        opacity: 1,
        y: -20,
        duration: 1,
      });
    }, heroRef);

  return () => {
ScrollTrigger.getById('hero')?.kill();
ctx.revert();  };
}, []);

  return (
    <section
      id='hero'
      ref={heroRef}
      className='relative w-full h-screen flex flex-col justify-center items-center text-(--primary) text-center overflow-hidden'>
      {/* Background */}
      <div
        ref={bgRef}
        className='absolute inset-0  mx-auto  overflow-hidden bg-cover bg-center transition-all duration-500 ease-in-out will-change-transform  shadow-xl shadow-gray-700 border-2 border-black'>
        <Image
          src='/bg-hero.webp'
          alt='Background Hero'
          fill
          priority
          className='object-cover'
        />
      </div>

      {/* Gambar Profil */}
      <Image
        src='/@Lanaa_rln (max).webp'
        alt='Logo'
        width={250}
        height={250}
        priority
        quality={75}
        loading='eager'
        className='relative z-10'
      />

      {/* Tag Informasi Tambahan */}
      <div
        ref={tagRef}
        className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm shadow-lg transition-opacity'>
        Hover gambar untuk melihat lebih banyak info
      </div>

      {/* Konten */}
      <div ref={contentRef} className='mt-5 opacity-0 relative z-10'>
        <h2 className='text-4xl font-bold text-secondary'>
          Hi, I’m Laras Rizki Alana
        </h2>
        <p className='text-lg text-secondary mt-2 mb-7'>
          A Data Enthusiast & Office Management Expert.
        </p>
        <div className='relative z-10 space-x-7'>
          <Link
            href='#contact'
            className='bg-white py-2 text-black outline-offset-2 outline-2 px-6  rounded-lg hover:bg-black hover:border-black hover:text-white hover:outline-offset-2 hover:outline-black transition duration-700 '>
            Download CV
          </Link>
          <Link
            href='#contact'
            className='bg-black py-2 text-white outline-offset-2 outline-2 px-6 rounded-lg hover:bg-white hover:border-white hover:text-black hover:outline-offset-2 hover:outline-white transition duration-700 '>
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
