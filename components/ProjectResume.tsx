
import Link from 'next/link';
import Image from 'next/image';
const ProjectResume = () => {
  return (
    <section
      id='ProjectandResume'
      className=' relative h-screen flex flex-col justify-center'>
      <div className='mx-auto text-center px-6 '>
        <div className='sm:gap-52 mt-8 flex flex-col md:flex-row-reverse items-center justify-between gap-8'>
          <div className=' flex justify-center flex-col items-center gap-7 absolute bg-(--accent) sm:bg-transparent rounded-full h-[40vw] w-[40vw] lg:w-[30vw] lg:h-[30vw] bottom-40 md:-bottom-0 -right-10 z-0 hover:z-30'>
            <Image
              src='/secretarial.png'
              alt='Finance'
              quality={75}
              width={250}
              height={350}
              data-nimg={1}
              className='hidden sm:block relative cursor-pointer  max-h-[70%] p-0.5 bg-(--text) border-2 border-(--stroke) shadow-[5px_5px_0_0] shadow-gray-700 hover:shadow-[7px_7px_0px_0px] transition-all duration-300 ease-in-out'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px '
            />
            <div className='justify-center hidden sm:flex text-lg bottom-[12%] -right-1/6 border-2 border-(--stroke) bg-(--background) shadow-[3px_3px_0_0] shadow-gray-700 p-5 w-52 h-12 rounded-[3rem]  items-center  z-20 hover:shadow-[5px_5px_0px_0px] hover:bg-(--hover) transition-all duration-300 ease-in-out '>
              <h3 className='text-3xl font-bold'>Secretarial</h3>
            </div>
          </div>
          <div className='hidden  absolute bg-transparent top-0 md:-top-40 w-[35vw] h-[25vw] -right-5 rounded-4xl  sm:flex justify-center items-center gap-7 flex-col z-0 hover:z-30 '>
            <Image
              src='/Finance.png'
              alt='Finance'
              quality={75}
              width={450}
              height={300}
              data-nimg={1}
              className='relative cursor-pointer max-w-full max-h-full p-2 bg-(--text)  border-2 border-(--stroke) shadow-[5px_5px_0_0] shadow-gray-700 hover:shadow-[7px_7px_0px_0px] transition-all duration-300 ease-in-out'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px '
            />
            <div className='justify-center  flex text-lg bottom-[12%] -right-1/6 border-2 border-(--stroke) bg-(--background) shadow-[3px_3px_0_0] shadow-gray-700 p-5 w-52 h-12 rounded-[3rem]  items-center  hover:shadow-[5px_5px_0px_0px] hover:bg-(--hover) transition-all duration-300 ease-in-out'>
              <h3 className='text-3xl font-bold'>Finance</h3>
            </div>
          </div>
          <div className='relative clamp-width  rounded-b-full '>
            <div className='img-3 w-[77vw] h-[77vw] md:w-[30vw] md:h-[30vw] grid place-items-center rounded-full overflow-hidden border-solid border-(--accent3) border-20  '>
              <Image
                src='/Laras.jpg'
                alt='Laras Rizki Alana'
                quality={75}
                width={750}
                height={550}
                data-nimg={1}
                className='relative cursor-pointer '
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px'
              />
            </div>

            <div className=' hidden justify-center sm:flex text-lg bottom-1/5 border-2 border-(--stroke) bg-(--background) shadow-[3px_3px_0_0] shadow-gray-700 p-5 w-52 h-12 rounded-[3rem]  items-center absolute z-50 hover:shadow-[5px_5px_0px_0px] hover:bg-(--hover) transition-all duration-300 ease-in-out'>
              <h3 className='text-3xl font-bold'>Administration</h3>
            </div>

            <div className='hidden justify-center sm:flex text-lg bottom-[12%] right-2/12 border-2 border-(--stroke) bg-(--background) shadow-[3px_3px_0_0] shadow-gray-700 p-5 w-52 h-12 rounded-[3rem]  items-center  z-50 hover:shadow-[5px_5px_0px_0px] hover:bg-(--hover) transition-all duration-300 ease-in-out'>
              <h3 className='text-3xl font-bold'>Communication</h3>
            </div>
          </div>

          {/* TEXT */}
          <div className='text-lg flex items-center sm:items-end flex-col text-main text-left max-w-2xl gap-2 h2'>
            <div className='flex w-full items-center flex-col'>
              <h2 className='text-4xl  italic font-bold  border-b-4 border-highlight inline-block  sm:-translate-y-20 p-2 hover:bg-(--hover)  hover:border-r-4 hover:shadow-lg  hover:shadow-gray-700 transition-all ease-in-out duration-300'>
                A <span className='text-(--pink-accent)'>Showcase</span> of{' '}
              </h2>
              <h2 className='sm:absolute italic  sm:translate-x-40 sm:-translate-y-7 text-4xl font-bold border-b-4 border-highlight inline-block p-2 hover:bg-(--hover)  hover:border-r-4 hover:shadow-lg  hover:shadow-gray-700 transition-all ease-in-out duration-300'>
                <span className='text-(--blue-accent)'>Dedication</span> &
                <span className='text-(--blue-accent)'> Creativity</span>!
              </h2>
            </div>

            <p className='my-4 text-center sm:text-right'>
              From administrative solutions to data management, my projects
              showcase my skills in action.
            </p>
            <div className='w-full h-0.5 bg-(--text) rounded-full'></div>
            <p className='my-4 text-center'>
              Curious about what I can do? See my work and experience it for
              yourself!
            </p>

            <Link
              className='bg-(--accent) py-2 text-(--buttontext)  rounded-2xl  shadow-[3px_3px_0px_0px] shadow-gray-700  border-(--border) border-2 px-6 hover:bg-(--accent2) hover:border-(--border-hover) hover:shadow-gray-700  hover:shadow-[5px_5px_0px_0px]  transition ease-in-out duration-700 '
              href={'/Project-Resume'}>
              Discover More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectResume;
