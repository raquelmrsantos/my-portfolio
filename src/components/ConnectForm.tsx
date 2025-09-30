'use client';

import { useState, FormEvent } from 'react';
import Section from './Section';

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section>
      <div className='flex flex-col items-center justify-center min-h-screen px-4'>
        <h2 className='text-4xl md:text-5xl mb-16 text-center font-sofia-sans-condensed font-bold uppercase'>
          Let&apos;s get in touch!
        </h2>

        <form
          onSubmit={handleSubmit}
          className='w-full max-w-2xl font-spline-sans-mono'
        >
          <div className='space-y-8'>
            {/* Name Field */}
            <div>
              <label
                htmlFor='name'
                className='block text-sm uppercase tracking-wide mb-2 font-light'
              >
                Your name*
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                value={formData.name}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black/40 outline-none transition-colors font-light'
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor='phone'
                className='block text-sm uppercase tracking-wide mb-2 font-light'
              >
                Phone
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black/40 outline-none transition-colors font-light'
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm uppercase tracking-wide mb-2 font-light'
              >
                Your email*
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black/40 outline-none transition-colors font-light'
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor='message'
                className='block text-sm uppercase tracking-wide mb-2 font-light'
              >
                How can I help you?
              </label>
              <textarea
                id='message'
                name='message'
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className='w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black/40 outline-none transition-colors resize-none font-light'
              />
            </div>

            {/* Submit Button */}
            <div className='flex justify-center pt-4'>
              <button
                type='submit'
                className='cursor-pointer px-12 py-4 border border-black uppercase tracking-wide text-sm font-light hover:bg-black hover:text-white transition-all duration-300'
              >
                Discuss the project
              </button>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}
