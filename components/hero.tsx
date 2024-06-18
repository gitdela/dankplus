import Image from 'next/image';

const Hero = () => {
  return (
    <section className='w-full bg-[#ffffff] text-gray-800'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center gap-24 py-12 lg:py-24'>
        <div className='w-full lg:w-1/2 flex flex-col justify-start gap-5'>
          <div className='space-y-2'>
            <h1 className='text-2xl lg:text-4xl font-bold text-center lg:text-left'>
              SOLAR PANEL MAINTENANCE & REPAIR SERVICES
            </h1>
            <h2 className='text-lg text-center lg:text-left lg:text-3xl text-[#f4a700] font-bold'>
              We maintain and repair every solar panel system under the sun.
            </h2>
          </div>
          <div className='space-y-5'>
            <p>
              <span className='font-bold'>
                No matter who installed your solar PV system, or what model it
                is
              </span>{' '}
              – Freedom Solar can maintain, repair and upgrade any system for
              maximum energy production and efficiency:
            </p>
            <ul className='list-disc pl-6 space-y-4'>
              <li>All Solar Equipment Makes and Models</li>
              <li>Complete Diagnostics</li>
              <li>Expert Solar Panel Repair</li>
              <li>Ongoing Solar Panel Maintenance</li>
              <li>System Updates & Monitoring</li>
            </ul>
          </div>
          <p>
            Freedom Solar employs a full-time staff of solar experts. If you
            have a question about your system or need maintenance, Request
            Service below!
          </p>
        </div>
        <div className='w-full lg:w-1/2 flex justify-end'>
          <Image
            className='w-full h-full shadow-4xl rounded-lg'
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

export default Hero;
