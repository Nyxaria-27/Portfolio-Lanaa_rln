// import Link from 'next/link';
import Image from 'next/image';
import { SectionTemplate } from './SectionTemplate';
import { RoleCard } from './RoleCard';

const MyImageSection = (
  <div className=''>
    <div className=' flex justify-center flex-col items-center gap-7 absolute bg-(--accent) sm:bg-transparent rounded-full h-[40vw] w-[40vw] lg:w-[30vw] lg:h-[30vw] bottom-40 md:-bottom-0 -right-10 -z-10 sm:z-0 hover:z-30'>
      <Image
        src='/secretarial.webp'
        alt='Finance'
        quality={75}
        width={250}
        height={350}
        data-nimg={1}
        className='hidden sm:block relative cursor-pointer  max-h-[70%] p-0.5 bg-(--text) border-2 border-(--stroke) shadow-[5px_5px_0_0] shadow-gray-700 hover:shadow-[7px_7px_0px_0px] transition-all duration-300 ease-in-out'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px '
      />
      <RoleCard label='Secretarial' positionClass='bottom-[12%] -right-1/6' />
    </div>
    <div className='hidden  absolute bg-transparent top-0 md:-top-40 w-[35vw] h-[25vw] -right-5 rounded-4xl  sm:flex justify-center items-center gap-7 flex-col z-0 hover:z-30 '>
      <Image
        src='/Finance.webp'
        alt='Finance'
        quality={75}
        width={450}
        height={300}
        data-nimg={1}
        className='relative cursor-pointer max-w-full max-h-full p-2 bg-(--text)  border-2 border-(--stroke) shadow-[5px_5px_0_0] shadow-gray-700 hover:shadow-[7px_7px_0px_0px] transition-all duration-300 ease-in-out'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px '
      />
      <RoleCard
        label='Finance'
        positionClass=' bottom-[12%] -right-1/6'
        isHiddenOnSmall={false}
      />
    </div>
    <div className='relative clamp-width  rounded-b-full '>
      <div className='img-3 w-[77vw] h-[77vw] md:w-[30vw] md:h-[30vw] grid place-items-center rounded-full overflow-hidden border-solid border-(--accent3) border-20  '>
        <Image
          src='/Laras.webp'
          alt='Laras Rizki Alana'
          quality={75}
          width={750}
          height={550}
          data-nimg={1}
                  layout='responsive'

          className='relative '
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px'
        />
      </div>
      <div className=' flex justify-center flex-col items-center gap-7  absolute h-[40vw] w-[40vw] lg:w-[30vw] lg:h-[30vw] bottom-40 md:-bottom-0 -translate-x-72 -z-10 sm:z-0 hover:z-30'>
        <Image
          src='/secretarial.webp'
          alt='Finance'
          quality={75}
          width={250}
          height={350}
          data-nimg={1}
          className='hidden sm:block relative cursor-pointer  max-h-[70%] p-0.5 bg-(--text) border-2 border-(--stroke) shadow-[5px_5px_0_0] shadow-gray-700 hover:shadow-[7px_7px_0px_0px] transition-all duration-300 ease-in-out'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px '
        />
        <RoleCard label='Administration' positionClass='bottom-1/5  z-30' />
      </div>

      <RoleCard
        label='Communication'
        positionClass='absolute -top-[7%]  z-30'
      />
    </div>
  </div>
);

const ProjectResume = () => {
  return (
    <SectionTemplate
      id='ProjectandResume'
      title1_1='A'
      highlight1_1='Showcase'
      title1_2='of'
      highlight1_2=''
      title2_1=''
      highlight2_1='Dedication'
      title2_2='&'
      highlight2_2='Creativity'
      title2_3='!'
      paragraph1='From administrative solutions to data management, my projects showcase my skills in action.'
      paragraph2='Curious about what I can do? See my work and experience it for yourself!'
      buttonLabel='Discover More'
      buttonHref='/Project-Resume'
      reverse={true} // atau false sesuai kebutuhan
    >
      {/* Unik content seperti Image dll */}
      {MyImageSection}
    </SectionTemplate>
  );
};

export default ProjectResume;
