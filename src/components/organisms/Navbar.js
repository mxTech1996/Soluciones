'use client';

import { useCart } from 'ecommerce-mxtech';
import Link from 'next/link';

const Navbar = () => {
  const { products } = useCart();
  return (
    <header className='bg-[#0f0f0f] text-white flex items-center justify-between px-6 md:px-10 py-4'>
      <Link href='/'>
        <div className='flex items-center gap-2'>
          <div className='bg-green-700 rounded-full w-8 h-8 flex items-center justify-center'>
            <span className='text-white font-bold text-sm'>SI</span>
          </div>
          <span className='text-sm font-semibold tracking-wide'>
            Solutions Indiana
          </span>
        </div>
      </Link>
      <nav className='hidden md:flex gap-6 text-sm font-medium'>
        <a href='#products' className='hover:text-green-400 cursor-pointer'>
          Solutions
        </a>
        <a href='#about' className='hover:text-green-400 cursor-pointer'>
          About
        </a>
        <a href='#services' className='hover:text-green-400 cursor-pointer'>
          Services
        </a>
        <a href='#testimonials' className='hover:text-green-400 cursor-pointer'>
          Testimonials
        </a>
        <a
          href='/more-information'
          className='hover:text-green-400 cursor-pointer'
        >
          Contact
        </a>
      </nav>
      <Link href='/my-cart'>
        <div className='relative'>
          <button className='bg-green-700 px-4 py-2 rounded-md text-sm font-semibold'>
            My cart
          </button>
          <div className='absolute top-0 right-0 bg-white text-black rounded-full w-4 h-4 flex items-center justify-center text-xs'>
            {products.length}
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
