import Image from "next/image";

const About = () => {
  return (
    <section
      id='about'
      className='py-20 bg-primary text-secondary flex flex-col items-center'>
      <div className='max-w-5xl mx-auto text-center px-6'>
        <h2 className='text-4xl font-bold border-b-4 border-highlight inline-block pb-2'>
          Tentang Saya
        </h2>
        <div className='mt-8 flex flex-col md:flex-row items-center gap-8'>
          <Image
            src='/Profile.jpg'
            alt='Laras Rizki Alana'
            width={500}
            height={300}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px'
          />
          <div className='text-lg text-main text-left max-w-2xl'>
            <p>
              Saya{' '}
              <span className='font-semibold text-highlight'>
                Laras Rizki Alana
              </span>
              , lulusan SMK Negeri 21 Jakarta dengan jurusan Manajemen
              Perkantoran dan Layanan Bisnis. Saya memiliki minat besar dalam
              bidang administrasi, pengolahan data, dan komunikasi internal
              serta eksternal.
            </p>
            <p className='mt-4'>
              Dengan pengalaman sebagai Wakil Sekretaris OSIS dan Sekretaris
              PMR, saya terbiasa dalam mengelola dokumen, menyusun agenda
              kegiatan, serta berkoordinasi dengan tim. Saya juga memiliki
              pengalaman magang di bagian{' '}
              <span className='font-semibold text-highlight'>
                Staff Accounting
              </span>{' '}
              dan
              <span className='font-semibold text-highlight'>
                {' '}
                Procurement Purchasing
              </span>
              , yang memperluas wawasan saya dalam pengolahan data finansial dan
              proses pengadaan.
            </p>
            <p className='mt-4'>
              Keahlian saya meliputi penggunaan software seperti Microsoft
              Office, Google Spreadsheet, serta kemampuan komunikasi dalam
              Bahasa Indonesia dan Bahasa Inggris. Saya adalah pribadi yang
              bertanggung jawab, fleksibel, dan selalu berusaha untuk memberikan
              yang terbaik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
