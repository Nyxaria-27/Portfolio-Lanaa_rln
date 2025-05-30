import dynamic from 'next/dynamic';
// const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
// import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '../components/About';
import Experience from '../components/Experience';
import Quote from '@/components/Quote';
import Contact from '../components/Contact'; 
import Head from 'next/head';
import ProjectResume from '@/components/ProjectResume';
import Footer from '@/components/Footer';

import { League_Spartan } from 'next/font/google';
const leagueSpartan = League_Spartan({ subsets: ['latin'], display: 'swap',   fallback: ['system-ui', 'sans-serif'],   preload: true,
 // optional 
});

export default function Home() {
  return (
    <div className={leagueSpartan.className}>
      <Head>
        <title>Laras Rizki Alana</title>
      </Head>
      <div className='container-body antialiased '>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <ProjectResume />
        <Quote/>
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}
