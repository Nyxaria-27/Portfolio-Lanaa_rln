import Image from 'next/image';
import Link from 'next/link';
const About = () => {
  return (
    <section
      id='AboutMe'
      className='relative  h-screen  flex flex-col justify-center'>
      <div className='mx-auto text-center px-6 '>
        <div className='mt-8 flex flex-col md:flex-row-reverse items-center gap-8'>
          <div className=''>
            <div className='sm:absolute -right-40 h-[40vw] w-[40vw] rounded-full bg-(--accent2)' />
            <div className='relative rounded-b-full overflow-hidden clamp-width  '>
              <div className='absolute aspect-square inset-0 rounded-full bg-(--accent) translate-y-44 ' />
              <Image
                src='/Profile2.png'
                alt='Laras Rizki Alana'
                quality={75}
                width={770}
                height={570}
                data-nimg={1}
                className='relative w-full '
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px'
              />
            </div>
          </div>

          <div className='text-lg text-main text-left max-w-2xl gap-2 flex flex-col items-center sm:items-start'>
            <h2 className='text-4xl italic font-bold border-b-4 border-highlight inline-block pb-2 sm:-translate-y-20 p-2 hover:bg-(--hover)  hover:border-r-4 hover:shadow-lg  hover:shadow-gray-700 transition-all ease-in-out duration-300'>
              Meet the <span className='text-(--pink-accent)'>Person</span>
            </h2>
            <h2 className='sm:absolute italic  sm:translate-x-40 sm:-translate-y-7 text-4xl font-bold border-b-4 border-highlight inline-block pb-2 p-2 hover:bg-(--hover)  hover:border-r-4 hover:shadow-lg  hover:shadow-gray-700 transition-all ease-in-out duration-300'>
              Behind the <span className='text-(--blue-accent)'>Data</span> &
              <span className='text-(--blue-accent)'> Organization</span>!
            </h2>

            <p className='my-4 text-center sm:text-left'>
              I am a graduate of SMK Negeri 21 Jakarta majoring in Office
              Management and Business Services. I have experience in
              administration, data management, and internal and external
              communication.
            </p>

            <Link
              className='bg-(--accent) py-2 text-(--buttontext)  rounded-2xl  shadow-[3px_3px_0px_0px] shadow-gray-700  border-(--border) border-2 px-6 hover:bg-(--accent2) hover:border-(--border-hover) hover:shadow-gray-700  hover:shadow-[5px_5px_0px_0px]  transition ease-in-out duration-700 '
              href={'/AboutMe'}>
              See My Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
