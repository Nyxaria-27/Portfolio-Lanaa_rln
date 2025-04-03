import { Html, Head, Main, NextScript } from "next/document";
export const metadata = {
  title: 'Laras Rizki Alana',
  };
import { useEffect, useState } from "react";



export default function Document() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Cek localStorage untuk tema yang disimpan
    const savedTheme = localStorage.getItem('theme') || '';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);
  return (
    <Html lang='en' className={theme === 'dark' ? 'dark' : ''}>
      <Head>
        <link rel='icon' href='/favicon.svg' type='image/x-icon' />
      </Head>
      <body
        className='overflow-x-hidden  antialiased dark:bg-(--background) dark:text-(--text) transition-all duration-300 ease-in-out'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
