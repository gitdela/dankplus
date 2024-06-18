import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-[#002a8a]'>
      <div className='container mx-auto text-white py-6'>
        <div className='flex items-center gap-5 py-4'>
          <span className='py-4 px-8 border border-[#f4a700] rounded'>
            Start your <span className='font-bold'>FREE</span> <br></br>{' '}
            Consultation
          </span>

          <span className='py-4 px-8  border border-[#f4a700] rounded'>
            Refer a <span className='font-bold'>LOVED</span> <br></br> one
          </span>
        </div>
        <hr />
        <div className='flex items-center'>
          <div className='flex flex-col gap-10 py-8'>
            <span>
              <p className='text-3xl font-extrabold text-[#f4a700]'>
                DankPlus Solutions
              </p>
              <p className='uppercase font-semibold'>
                We help you live more powerfully
              </p>
            </span>
            <div className='flex flex-col gap-1'>
              <h3 className='font-bold text-[#f4a700]'>HEADQUARTERS</h3>
              <p>
                <span className='font-bold'>General Enquiries:</span>{' '}
                <span className='font-extralight'>+233 20 715 3160</span>
              </p>
              <p>
                <span className='font-bold'>Customer Support:</span>{' '}
                <span className='font-extralight'>+233 55 805 6141</span>
              </p>
              <p className='font-extralight'>D11/14 SAKUMONO ESTATES</p>
              <p className='font-extralight'>P. O. Box SK1295</p>
              <p className='font-extralight'>SAKUMONO</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
