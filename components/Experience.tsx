const experiences = [
  {
    title: 'Wakil Sekretaris OSIS',
    company: 'SMK Negeri 21 Jakarta',
    date: 'Agustus 2023 - Agustus 2024',
    description:
      'Menyusun dan mengelola dokumen administrasi OSIS serta mengkoordinasi anggota dalam menjalankan proyek sekolah.',
  },
  {
    title: 'Sekretaris PMR',
    company: 'SMK Negeri 21 Jakarta',
    date: 'Agustus 2023 - Agustus 2024',
    description:
      'Membantu administrasi kegiatan PMR, termasuk surat-menyurat dan pencatatan agenda proyek kesehatan sekolah.',
  },
  {
    title: 'Siswa PKL - Staff Accounting',
    company: 'PT. Farrel Internusa Pratama',
    date: 'Juli 2024 - September 2024',
    description:
      'Mengelola data keuangan perusahaan, mencatat bukti kas keluar, dan menyusun laporan pembayaran.',
  },
];

const Experience = () => {
  return (
    <section id='experience' className='py-20 bg-primary text-secondary'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-semibold text-center'>Pengalaman</h2>
        <div className='mt-6 space-y-6'>
          {experiences.map((exp, index) => (
            <div key={index} className='border-l-4 border-accent pl-4'>
              <h3 className='text-xl font-semibold'>{exp.title}</h3>
              <p className='text-gray-600'>
                {exp.company} | {exp.date}
              </p>
              <p className='mt-2'>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
