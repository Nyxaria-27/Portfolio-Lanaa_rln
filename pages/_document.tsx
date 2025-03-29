import { Html, Head, Main, NextScript } from "next/document";
export const metadata = {
  title: 'Laras Rizki Alana',
  };

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='/favicon.svg' type='image/x-icon' />
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
