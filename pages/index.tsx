import Navbar from '../components/Navbar';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
// import Hero from '@/components/Hero';

import About from '../components/About';
import Experience from '../components/Experience';
import Contact from '../components/Contact'; 
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Laras Rizki Alana</title>
      </Head>
      <div className='container-body antialiased '>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
