import emailjs from 'emailjs-com';
import { useRef } from 'react';
import toast from 'react-hot-toast';

import React from 'react';

type ContactLinkProps = {
  href: string;
  icon?: string;
  highlight1: string;
  information: string;
  paragraph1: string;
};

export const ContactLink = ({
  href,
  icon = '',
  highlight1 = '',
  information = '',
  paragraph1 = '',
}: ContactLinkProps) => {
  return (
    <a
      href={`${href}`}
      target='_blank'
      rel='noopener noreferrer'
      className='group card-container cursor-pointer flex justify-center items-center gap-x-7 my-5 p-5 rounded-xl transition-all ease-in-out duration-500 border-[var(--stroke)] shadow-[3px_3px_0px_0px_gray] md:shadow-none md:border-transparent border-2 hover:border-[var(--stroke)] hover:shadow-[3px_3px_0px_0px_gray]'>
      <span className='p-1.5  justify-center rounded-full transition-all ease-in-out duration-500 border border-[var(--stroke)] group-hover:shadow-[3px_3px_0px_0px_gray]'>
        <div className='text-2xl  grayscale group-hover:grayscale-0 transition-all ease-in-out duration-500'>
          {icon}
        </div>
      </span>
      <div className='flex flex-col items-center justify-center w-full'>
        <h3 className='text-xl font-bold'>
          <span className='text-(--accent)'>{highlight1}</span> {information}
        </h3>
        <p className=' font-serif text-center'>{paragraph1}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentTime = new Date().toLocaleString(); // waktu saat ini

    if (form.current) {
      const formData = new FormData(form.current);
      formData.append('time', currentTime); // tambahkan `time` ke form

      toast
        .promise(
          emailjs.sendForm(
            'service_4x9954y', // Service ID
            'template_dgfaxrj', // Template ID
            form.current,
            'U963MVJM-XZNh2bz0' // Public Key
          ),
          {
            loading: 'Sending message...',
            success: 'Message sent successfully! 🚀',
            error: 'Failed to send message. Try again!',
          }
        )
        .then(() => {
          form.current?.reset();
        });
    }
  };
  return (
    <section
      id='Contact'
      className=' mt-72 text-lg bg-primary text-secondary text-center relative min-h-screen  flex flex-col justify-center '>
      <div className=' text-center px-5 '>
        <div className={` flex flex-col items-center justify-between gap-8 `}>
          <div className='relative rounded-b-full w-full -z-50 h-full '>
            {/* <div className='absolute w-[27vw] h-[27vw] aspect-square inset-0 rounded-full bg-(--accent) top-0 ' /> */}
          </div>

          <div className=' text-lg flex items-center flex-col text-main text-left max-w-screen '>
            <div className=' flex w-full items-center sm:items-start max-w-3xl flex-col gap-2 '>
              <h2
                className='text-4xl font-bold border-b-4 text-center inline-block p-2 hover:bg-(--hover) hover:shadow-lg hover:border-x-4 hover:shadow-gray-700 transition-all ease-in-out duration-300'
                data-title="Let's Talk About Ideas">
                Got an <span className='text-(--pink-accent)'>Idea</span>? Let&apos;s{' '}
                <span className='text-(--blue-accent)'>bing It</span> to{' '}
                <span className='text-(--blue-accent)'>Life</span> Together!
              </h2>
            </div>

            <p className='my-4 font-semibold text-xl font-serif text-center'>
              &quot;Open for collaboration, opportunities, and great
              conversations.&quot;
            </p>
          </div>

          <div
            className={`w-full sm:gap-40 mt-8 flex flex-col md:flex-row
              items-center justify-center gap-y-8   `}>
            <div className='contact-container  grid-cols-7 gap-y-6'>
              <div className='contact-content flex flex-col'>
                <ContactLink
                  href='https://maps.app.goo.gl/feVxG75SsswnjVrQ8'
                  icon='📌'
                  highlight1='Address'
                  information=': Jl. Kp Melayu Barat, Tebet, Jakarta Selatan'
                  paragraph1="Whether it's a project, a question, or just a greeting, I'm here."
                />

                <ContactLink
                  href='https://www.instagram.com/lanaa_rln/'
                  icon='📸'
                  highlight1='Instagram'
                  information=': @Lanaa_rln'
                  paragraph1="Don't be a stranger — say hello!"
                />
                <ContactLink
                  href='https://wa.link/tfxx01'
                  icon='📞'
                  highlight1='WhatsApp'
                  information=': +62 895-8111-51020'
                  paragraph1="I'm just one message away from our next big thing."
                />
                <ContactLink
                  href='mailto:larasrizkialanaa31@gmail.com'
                  icon='📩'
                  highlight1='Email'
                  information=': larasrizkialanaa31@gmail.com'
                  paragraph1="Got an idea? Let's bing it to life together!"
                />
              </div>
            </div>

            {/* Contact Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className='max-w-screen w-full md:w-[40%] space-y-6 p-7 bg-(--hover) rounded-3xl border-(--stroke) border-4 shadow-[3px_3px_0px_0px] shadow-gray-700 '>
              <h1 className='text-2xl font-bold text-start'>Email</h1>
              <div className='flex flex-col    md:flex-row gap-4 '>
                <div className='flex flex-col grow '>
                  <label className='text-left'>
                    Your Full Name <b>*</b>
                  </label>
                  <input
                    name='name'
                    type='text'
                    placeholder='Your Full Name'
                    className='w-full p-3 rounded-2xl border border-gray-700 bg-(--background) focus:outline-none focus:ring-2 focus:ring-(--accent)'
                    required
                  />
                </div>
                <div className='flex flex-col grow'>
                  <label className='text-left'>
                    Your Email Address <b>*</b>
                  </label>
                  <input
                    name='email'
                    type='email'
                    placeholder='Your Email Address'
                    className='w-full p-3 rounded-2xl border border-gray-700 bg-(--background) focus:outline-none focus:ring-2 focus:ring-(--accent)'
                    required
                  />
                </div>
              </div>
              <input
                type='hidden'
                name='time'
                value={new Date().toLocaleString()}
              />

              <div className='flex flex-col'>
                <label className='text-left'>
                  Your Subject <b>*</b>
                </label>
                <input
                  name='subject'
                  type='text'
                  placeholder='Your Subject'
                  className='w-full p-3 rounded-2xl border border-gray-700 bg-(--background) focus:outline-none focus:ring-2 focus:ring-(--accent)'
                  required
                />
              </div>

              <div className='flex flex-col'>
                <label className='text-left'>
                  Your Message <b>*</b>
                </label>
                <textarea
                  name='message'
                  placeholder='Your Message'
                  rows={5}
                  className='w-full resize-none p-3 rounded-2xl border border-gray-700 bg-(--background) focus:outline-none focus:ring-2 focus:ring-(--accent)'
                  required></textarea>
              </div>

              <div className='flex justify-between items-center'>
                <p className='text-sm text-gray-500'>
                  * Accept the terms and conditions.
                </p>
                <button
                  className='bg-(--accent) py-2 text-(--buttontext) rounded-2xl shadow-[3px_3px_0px_0px] shadow-gray-700 border-(--border) border-2 px-6 hover:bg-(--accent2) hover:border-(--border-hover) hover:shadow-gray-700 hover:shadow-[5px_5px_0px_0px] transition ease-in-out duration-700'
                  type='submit'>
                  Get In Touch
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
