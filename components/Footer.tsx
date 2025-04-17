import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white shadow-[3px_-7px_17px_rgba(0,0,0)] border-t border-gray-700 pt-10 mt-10 pb-5'>
      <div className='max-w-6xl mx-auto flex flex-col items-center  gap-6 text-center md:text-left'>
        {/* Branding */}
        <div className='flex flex-col items-center'>
          <a href='#'>
            <h3 className='text-2xl font-semibold hover:text-(--highlight)'>
              Laras Rizki Alana
            </h3>
          </a>
          <p className='text-lg mt-2 text-paragraph text-(--accent)'>
            Portfolio | Administration & Business Management
          </p>
        </div>

        {/* Navigation Links */}
        <div className='flex items-center flex-col'>
          <h4 className='text-lg font-medium mb-2 '>Quick Links</h4>
          <ul className='space-x-5 text-paragraph text-sm flex'>
            <li>
              <a href='#AboutMe' className='hover:text-(--highlight)'>
                About Me
              </a>
            </li>
            <li>
              <a
                href='#ExperienceandSkills'
                className='hover:text-(--highlight)'>
                Experience & Skills
              </a>
            </li>
            <li>
              <a href='#ProjectandResume' className='hover:text-(--highlight)'>
                Projects & Resume
              </a>
            </li>
            <li>
              <a href='#Contact' className='hover:text-(--highlight)'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Socials & Contact */}
        <div>
          <h4 className='text-lg font-medium '>Get in Touch</h4>
          <div className='flex justify-center md:justify-start gap-x-4'>
            <a
              href='https://wa.link/tfxx01'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full overflow-hidden border flex justify-center items-center '>
              <Image
                src='/whatsapp.svg'
                alt='WhatsApp'
                width={20}
                height={20}
              />
            </a>
            <a
              href='https://www.instagram.com/lanaa_rln/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full bg-white overflow-hidden border flex justify-center items-center '>
              <Image
                src='/instagram.svg'
                alt='Instagram'
                width={20}
                height={20}
              />
            </a>
            <a
               href='mailto:larasrizkialanaa31@gmail.com'
              className='rounded-full overflow-hidden border flex justify-center items-center '>
              <Image src='/gmail.svg' alt='Email' width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      <div className='mt-8 text-center text-xs text-paragraph border-t border-secondary/20 pt-4'>
        &copy; {new Date().getFullYear()} Laras Rizki Alana. All rights
        reserved.
        <p className='text-xs text-gray-500'>
          Developed with care by{' '}
          <a
            href='https://yourportfolio.link'
            target='_blank'
            className='hover:underline text-pink-400'>
            Dwi Wahyu Ramadhan
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
