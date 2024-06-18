import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, ServerCog } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className='w-full bg-[#002a8a]'>
      <div className='container mx-auto flex items-center justify-between text-[#f4a700] py-8'>
        <h1>DankPlus SOLUTIONS</h1>

        <ul className='hidden md:flex gap-4'>
          <Link href={'#services'}>Services</Link>
          <Link href={'#request'} className='capitalize'>
            Request a Service
          </Link>
          <Link href={'#whychooseus'}>Why Choose Us</Link>
          <Link href={'#ourpeople'}>Our People</Link>
          <Link href={'#contact'}>Contact</Link>
        </ul>
        <Sheet>
          <SheetTrigger className='md:hidden'>
            <Menu className='text-[#f4a700]' />
          </SheetTrigger>
          <SheetContent side={'left'} className='bg-[#002a8a] border-r-0 pt-16'>
            <SheetHeader>
              <SheetTitle className='text-2xl text-[#f4a700] text-left'>
                DankPlus SOLUTIONS
              </SheetTitle>
              <SheetDescription className='text-[#f4a700] flex flex-col justify-start items-start space-y-8 pt-10 text-2xl'>
                <Link href={'#services'}>
                  <span className='flex justify-center items-center gap-4'>
                    <ServerCog />
                    Services
                  </span>
                </Link>
                <Link href={'#request'}>
                  <span className='flex justify-center items-center gap-4'>
                    <ServerCog />
                    Request A Service
                  </span>
                </Link>
                <Link href={'#whychooseus'}>
                  <span className='flex justify-center items-center gap-4'>
                    <ServerCog />
                    Why Choose Us
                  </span>
                </Link>
                <Link href={'#ourpeople'}>
                  <span className='flex justify-center items-center gap-4'>
                    <ServerCog />
                    Our People
                  </span>
                </Link>
                <Link href={'#contact'}>
                  <span className='flex justify-center items-center gap-4'>
                    <ServerCog />
                    Contact
                  </span>
                </Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
