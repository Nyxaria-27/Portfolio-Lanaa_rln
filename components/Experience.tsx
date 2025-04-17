// const experiences = [
//   {
//     title: 'Wakil Sekretaris OSIS',
//     company: 'SMK Negeri 21 Jakarta',
//     date: 'Agustus 2023 - Agustus 2024',
//     description:
//       'Menyusun dan mengelola dokumen administrasi OSIS serta mengkoordinasi anggota dalam menjalankan proyek sekolah.',
//   },
//   {
//     title: 'Sekretaris PMR',
//     company: 'SMK Negeri 21 Jakarta',
//     date: 'Agustus 2023 - Agustus 2024',
//     description:
//       'Membantu administrasi kegiatan PMR, termasuk surat-menyurat dan pencatatan agenda proyek kesehatan sekolah.',
//   },
//   {
//     title: 'Siswa PKL - Staff Accounting',
//     company: 'PT. Farrel Internusa Pratama',
//     date: 'Juli 2024 - September 2024',
//     description:
//       'Mengelola data keuangan perusahaan, mencatat bukti kas keluar, dan menyusun laporan pembayaran.',
//   },
// ];
import { SectionTemplate } from './SectionTemplate';
import Image from 'next/image';

const MyImageSection = (
  <div className='mt-52 sm:mt-0'>
    <div className=' absolute bg-(--accent) rounded-full h-[40vw] w-[40vw] lg:w-[30vw] lg:h-[30vw] bottom-40 md:-bottom-0 -left-10 -z-10'>
      {/* <div className='justify-center flex text-lg bottom-[12%] right-2/12 border-2 border-(--stroke) bg-(--background) shadow-md shadow-gray-700 p-5 w-60 h-20 rounded-[3rem]  items-center absolute z-50'>
              <h3 className='text-3xl font-bold'>Communication</h3>
            </div>
            <div className='justify-center flex text-lg bottom-[12%] -right-1/6 border-2 border-(--stroke) bg-(--background) shadow-md shadow-gray-700 p-5 w-60 h-20 rounded-[3rem]  items-center absolute z-20'>
              <h3 className='text-3xl font-bold'>Secretarial</h3>
            </div> */}
    </div>
    <div className='img-2  absolute bg-(--accent2) rounded-full h-[25vw] w-[45vw] lg:h-[25vw] md:w-[35vw] m-0 top-40 md:-top-40 -left-12 -z-10 '></div>
    <div className='relative clamp-width  rounded-b-full '>
      {/* <div className='absolute aspect-square inset-0 rounded-full bg-(--accent) translate-y-44 ' /> */}
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

      <div className='grid grid-cols-2 items-center text-lg bottom-1/5 border-2 border-(--stroke) bg-(--background) shadow-[3px_3px_0_0] shadow-gray-700 px-5 w-60 h-20 rounded-[3rem]  absolute z-30 hover:shadow-[5px_5px_0px_0px] hover:bg-(--hover) transition-all duration-300 ease-in-out'>
        <span className='text-3xl font-bold text-center'>3 +</span>
        <h3 className='text-md'>
          Years of <span className='text-(--accent3)'>Experience</span>
        </h3>
        {/* <h1>(correspondence, archiving, data management, etc.)</h1> */}
      </div>
      <div className='grid grid-cols-2 items-center text-lg bottom-[12%] -right-1/6 border-2 hover:shadow-[5px_5px_0px_0px] hover:bg-(--hover) transition-all duration-300 ease-in-out  border-(--stroke) bg-(--background) shadow-[3px_3px_0_0] shadow-gray-700 px-5 w-60 h-20 rounded-[3rem] absolute z-30'>
        <span className='text-3xl font-bold text-center'>100 +</span>
        <h3 className='text-md'>
          Completed <span className='text-(--accent3)'>Projects</span>
        </h3>
        {/* <h1>(correspondence, archiving, data management, etc.)</h1> */}
      </div>
    </div>
  </div>
);

const Experience = () => {
  return (
    <SectionTemplate
      id='ExperienceandSkills'
      title1_1='From'
      highlight1_1='Knowledge'
      title1_2='to'
      highlight1_2='Action'
      title2_1='Mastering the'
      highlight2_1='Art'
      title2_2='of'
      highlight2_2='Efficiency'
      title2_3='!'
      paragraph1='From administration to data analysis, from organization to communication.'
      paragraph2='skills that make a real impact! '
      buttonLabel='Explore My Expertise'
      buttonHref='/Experience-Skills'
      reverse={false} // atau false sesuai kebutuhan
    >
      {/* Unik content seperti Image dll */}
      {MyImageSection}
    </SectionTemplate>
  );
};

export default Experience;
