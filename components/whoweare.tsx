import Image from 'next/image';
import React from 'react';

const WhoWeAre = () => {
  return (
    <section className='w-full bg-[#ffffff] text-gray-800'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 py-20'>
        <div className='w-full lg:w-1/2 flex flex-col gap-12'>
          <h1 className='text-3xl font-bold text-center'>Who We Are</h1>
          <p className=''>
            With over 5 years of experience in the industry, Dankplus Solutions
            has become a trusted name in solar system cleaning. Our dedicated
            team of experts is committed to ensuring that your solar panels are
            operating at their peak efficiency, helping you save money on your
            energy bills and reduce your carbon footprint.
          </p>
          <p>
            At Dankplus Solutions, we understand the importance of keeping your
            solar panels clean and well-maintained. Not only does this improve
            their performance, but it also prolongs their lifespan, ensuring
            that you get the most out of your investment. Our cutting- edge
            equipment and eco-friendly cleaning solutions allow us to provide a
            thorough and efficient service, leaving your solar panels sparkling
            clean and ready to absorb maximum sunlight.
          </p>
        </div>
        <div className='w-full lg:w-1/3 flex justify-start'>
          <Image
            className='w-full h-full shadow-2xl rounded'
            src={'https://picsum.photos/500/500'}
            alt='hero'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
