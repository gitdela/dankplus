import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full bg-[#002a8a]'>
      <div className='container mx-auto flex items-center justify-between text-[#f4a700] py-8'>
        <h1>DankPlus SOLUTIONS</h1>

        <ul className='flex gap-4'>
          <Link href={'#services'}>Services</Link>
          <Link href={'#request'} className='capitalize'>
            Request a Service
          </Link>
          <Link href={'#whychooseus'}>Why Choose Us</Link>
          <Link href={'#ourpeople'}>Our People</Link>
          <Link href={'#contact'}>Contact</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
