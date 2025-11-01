'use client';

import { useState, FormEvent } from 'react';
import Section from './Section';
import BlurText from './BlurText';

export default function ConnectForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
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
        <BlurText
          text="Let's get in touch!"
          delay={150}
          animateBy='words'
          direction='top'
          className='text-5xl md:text-7xl mb-16 text-center font-sofia-sans-condensed font-bold uppercase'
        />
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-2xl font-spline-sans-mono uppercase'
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
                disabled={status === 'loading'}
                className='w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black/40 outline-none transition-colors font-light disabled:opacity-50'
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
                disabled={status === 'loading'}
                className='w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black/40 outline-none transition-colors font-light disabled:opacity-50'
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
                disabled={status === 'loading'}
                className='w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black/40 outline-none transition-colors font-light disabled:opacity-50'
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
                disabled={status === 'loading'}
                className='w-full px-4 py-3 bg-transparent border border-black/20 focus:border-black/40 outline-none transition-colors resize-none font-light disabled:opacity-50'
              />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <div className='text-center text-black text-sm'>
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className='text-center text-red-700 text-sm'>
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <div className='flex justify-center pt-4'>
              <button
                type='submit'
                disabled={status === 'loading'}
                className='cursor-pointer px-12 py-4 border border-black uppercase tracking-wide text-sm font-light hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {status === 'loading' ? 'Sending...' : 'Discuss the project'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}

