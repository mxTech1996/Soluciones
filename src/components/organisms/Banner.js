import { dataSite } from '@/data';
import { Link } from 'lucide-react';
import Image from 'next/image';

const CallToActionBanner = () => {
  return (
    <section className='relative rounded-3xl overflow-hidden bg-black my-20 mx-6 md:mx-20'>
      {/* Background Image */}
      <Image
        src={dataSite.services[2].image}
        alt='consulting'
        layout='fill'
        objectFit='cover'
        className='absolute inset-0 opacity-60'
      />

      {/* Overlay Content */}
      <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-6 px-6 md:px-16 py-20 text-white'>
        <div className='max-w-lg text-left'>
          <h2 className='text-3xl md:text-4xl font-semibold italic'>
            TURN STRATEGY <br /> INTO SUCCESS
          </h2>
          <Link href='#products'>
            <button className='mt-6 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition'>
              Know our Services
            </button>
          </Link>
        </div>

        <p className='max-w-md text-sm md:text-base text-white/90'>
          Your trusted partner in streamlining operations, boosting financial
          performance, and achieving sustainable organizational growth.
        </p>
      </div>
    </section>
  );
};

export default CallToActionBanner;
