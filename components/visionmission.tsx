import Image from 'next/image';
import React from 'react';

const VisionAndMission = () => {
  return (
    <section className='w-full bg-[#ffffff] text-gray-800' id='vision'>
      <div className='container mx-auto flex flex-col lg:flex-row-reverse justify-between items-center gap-12 py-20'>
        <div className='w-full lg:w-1/2 flex flex-col gap-12'>
          <h1 className='text-3xl font-bold text-center'>
            Our Company Vision & Mission
          </h1>
          <p className=''>
            To be the prefferd choice for solar and specialised cleaning
            services in Ghana and beyond whiles offering the best price and
            excellent service.
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

export default VisionAndMission;
