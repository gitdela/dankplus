import React from 'react';

const Services = () => {
  return (
    <section className='w-full bg-[#ffffff] text-gray-800' id='services'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center py-10'>Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 py-10 pb-20'>
          <ul className='list-disc pl-6 space-y-4'>
            <li>
              Cleaning of roof mount, ground mount and carport solar systems
            </li>
            <li>Vegetation Control</li>
            <li>Solar Panel Cleaning and Replacements</li>
          </ul>
          <ul className='list-disc pl-6 space-y-4'>
            <li>
              Cleaning of roof mount, ground mount and carport solar systems
            </li>
            <li>Vegetation Control</li>
            <li>Solar Panel Cleaning and Replacements</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
