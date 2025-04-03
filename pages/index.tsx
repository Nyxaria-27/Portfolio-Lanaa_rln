import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
// import Hero from '@/components/Hero';

import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact'; 
import Head from 'next/head';
import ProjectResume from '@/components/ProjectResume';

import { League_Spartan } from 'next/font/google';
const leagueSpartan = League_Spartan({ subsets: ['latin'] });

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
        <ProjectResume/>
        <Contact />
      </div>
    </div>
  );
}
