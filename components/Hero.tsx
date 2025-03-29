'use client';
import {useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useIsomorphicLayoutEffect } from '@react-hookz/web'; // Install: npm install @react-hookz/web


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);
  const tagRef = useRef(null); // Tag informasi tambahan

useIsomorphicLayoutEffect(() => {
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

  return () => {
    if (ScrollTrigger.getById('hero')) ScrollTrigger.getById('hero').kill();
  };
}, []);

  return (
    <section
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
          Halo! Saya Laras Rizki Alana
        </h2>
        <p className='text-lg text-secondary mt-2 mb-7'>
          Seorang profesional dalam Administrasi dan Pengolahan Data
        </p>
        <a
          href='#contact'
          className='bg-black text-white outline-offset-2 outline-2 px-6 py-2 rounded-lg hover:bg-white hover:border-white hover:text-black hover:outline-offset-2 hover:outline-white transition duration-700 relative z-10'>
          Hubungi Saya
        </a>
      </div>
    </section>
  );
};

export default Hero;
