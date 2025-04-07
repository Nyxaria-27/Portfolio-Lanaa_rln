import Link from 'next/link';
import React from 'react';

// components/SectionTemplate.tsx
type SectionTemplateProps = {
  id: string;
  title1_1: string;
  highlight1_1: string;
  title1_2: string;
  highlight1_2: string;
  title2_1: string;
  highlight2_1: string;
  title2_2: string;
  highlight2_2: string;
  title2_3: string;
  //   textHeading1: string;
  //   textHeading2: string;
  paragraph1: string;
  paragraph2: string;
  buttonLabel: string;
  buttonHref: string;
  reverse?: boolean;
  children: React.ReactNode; // Untuk gambar/image dan konten unik
}

const SectionTemplateComponent = ({
  id,
  title1_1,
  highlight1_1,
  title1_2,
  highlight1_2,
  title2_1,
  highlight2_1,
  title2_2,
  highlight2_2,
  title2_3,
  //   textHeading1,
  //   textHeading2,
  paragraph1,
  paragraph2,
  buttonLabel,
  buttonHref,
  reverse = false,
  children,
}: SectionTemplateProps) => {
  return (
    <section
      id={id}
      className='relative h-screen  flex flex-col  justify-center'>
      <div className='mx-auto text-center px-6 '>
        <div
          className={`sm:gap-52 mt-8 flex flex-col ${
            reverse ? 'md:flex-row-reverse' : 'md:flex-row'
          } items-center justify-between gap-8`}>
          {children}
          <div className='text-lg flex items-center flex-col text-main text-left max-w-2xl gap-2'>
            <div className='flex w-full items-center sm:items-start flex-col'>
              <h2 className='text-4xl italic font-bold border-b-4  inline-block sm:-translate-y-20 p-2 hover:bg-(--hover) hover:border-r-4 hover:shadow-lg hover:shadow-gray-700 transition-all ease-in-out duration-300'>
                {title1_1}{' '}
                <span className='text-(--pink-accent)'>{highlight1_1}</span>{' '}
                {title1_2}{' '}
                <span className='text-(--pink-accent)'>{highlight1_2}</span>
              </h2>
              <h2 className='sm:absolute italic sm:translate-x-40 sm:-translate-y-7 text-4xl font-bold border-b-4 border-highlight inline-block p-2 hover:bg-(--hover) hover:border-r-4 hover:shadow-lg hover:shadow-gray-700 transition-all ease-in-out duration-300'>
                {title2_1}{' '}
                <span className='text-(--blue-accent)'>{highlight2_1}</span>{' '}
                {title2_2}{' '}
                <span className='text-(--blue-accent)'>{highlight2_2}</span>{' '}
                {title2_3}
              </h2>
            </div>
            <p className='my-4 text-center'>{paragraph1}</p>
            <div className='w-full h-0.5 bg-(--text) rounded-full'></div>
            <p className='my-4 text-center'>{paragraph2}</p>
            <Link
              className='bg-(--accent) py-2 text-(--buttontext) rounded-2xl shadow-[3px_3px_0px_0px] shadow-gray-700 border-(--border) border-2 px-6 hover:bg-(--accent2) hover:border-(--border-hover) hover:shadow-gray-700 hover:shadow-[5px_5px_0px_0px] transition ease-in-out duration-700'
              href={buttonHref}>
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SectionTemplate = React.memo(SectionTemplateComponent);
