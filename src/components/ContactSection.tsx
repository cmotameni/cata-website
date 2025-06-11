import { useState } from 'react';
import { PrimaryButton } from './Button';
import contactIcon1 from '../../assets/contact-icon-1.png';
import contactIcon2 from '../../assets/contact-icon-2.png';
import contactIcon3 from '../../assets/contact-icon-3.png';

const iconClasses = 'w-6 h-6 flex-shrink-0 mr-4 object-contain';

const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xkgbnvzw', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="bg-[#0A2A5C] py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 md:gap-16 items-center justify-between">
        {/* Left Info */}
        <div className="flex-1 text-white max-w-xl w-full text-center md:text-left">
          <span className="inline-block text-white text-[16px] font-regular uppercase px-5 py-2 rounded-[8px] border border-white/10 mb-8 tracking-wider mx-auto md:mx-0" style={{ letterSpacing: 1 }}>CONTACT</span>
          <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
            <span className="font-semibold">Learn How Cata Tools Can Make Your</span>{' '}
            <span className="font-black text-[#DBEAFE]">Process Monitoring 10x Faster</span>
          </h2>
          <hr className="border-white/30 mb-6" />
          <div className="mb-6 font-semibold">Together we'll:</div>
          <ul className="space-y-6">
            {[
              {
                icon: <img src={contactIcon1} alt="Contact Icon 1" className={iconClasses} />,
                text: 'Discuss the challenges you are looking to solve',
              },
              {
                icon: <img src={contactIcon2} alt="Contact Icon 2" className={iconClasses} />,
                text: 'Tailor the product design specific to your goals',
              },
              {
                icon: <img src={contactIcon3} alt="Contact Icon 3" className={iconClasses} />,
                text: 'Plan next steps to deploy Cata Tools for your team',
              },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start md:items-start justify-center md:justify-start">
                {item.icon}
                <span className="text-base md:text-lg text-white/90">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Form */}
        <div className="flex-1 w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-green-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">We'll be in touch with you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder-gray-400" 
                  type="text" 
                  name="name"
                  placeholder="Enter your full name" 
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder-gray-400" 
                  type="email" 
                  name="email"
                  placeholder="Enter your work email" 
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Job Title</label>
                <input 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder-gray-400" 
                  type="text" 
                  name="jobTitle"
                  placeholder="Enter your job title" 
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Company</label>
                <input 
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder-gray-400" 
                  type="text" 
                  name="company"
                  placeholder="Enter your company name" 
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Tell us about your process monitoring needs (Optional)</label>
                <textarea 
                  className="w-full border border-gray-300 rounded px-3 py-2 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-200 text-black placeholder-gray-400" 
                  name="message"
                  placeholder="What challenges are you trying to solve?" 
                />
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm">{errorMessage}</div>
              )}
              <div className="flex justify-end pt-2">
                <PrimaryButton 
                  type="submit" 
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Book a Demo'}
                </PrimaryButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 