import Image from 'next/image';
import { SectionTemplate } from './SectionTemplate';

const MyImageSection = (
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
);
const About = () => {
  return (
    <SectionTemplate
      id='AboutMe'
      title1_1='Meet the'
      highlight1_1='Person'
      title1_2=''
      highlight1_2=''
      title2_1='Behind the'
      highlight2_1='Data'
      title2_2='&'
      highlight2_2='Organization'
      title2_3='!'
      paragraph1='I am a graduate of SMK Negeri 21 Jakarta majoring in Office
Management and Business Services. I have experience in
administration, data management, and internal and external
communication.'
      paragraph2=''
      buttonLabel='See My Story'
      buttonHref='/AboutMe'
      reverse={true} // atau false sesuai kebutuhan
    >
      {/* Unik content seperti Image dll */}
      {MyImageSection}
    </SectionTemplate>
  );
};

export default About;
