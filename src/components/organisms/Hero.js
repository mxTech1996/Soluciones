import { dataSite } from '@/data';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className=' text-white px-6 md:px-20 py-16'>
      {/* Title */}
      <div className='text-center md:text-left mb-10'>
        <h1 className='text-4xl md:text-6xl font-extrabold'>
          EMPOWERING <span className='text-green-400'>YOUR BUSINESS</span>{' '}
          <br />
          <span className='italic'>WITH STRATEGY</span>
        </h1>
        <p className='text-gray-300 mt-4 max-w-xl'>{dataSite.description}</p>
      </div>

      {/* Top Stats */}
      <div className='flex items-center justify-between bg-white text-black rounded-xl px-6 py-4 w-full max-w-xl mx-auto md:mx-0 mb-14 shadow-lg'>
        <div>
          <p className='text-2xl font-bold text-green-600'>20+</p>
          <p className='text-sm'>Businesses Advised</p>
        </div>
        <div className='flex items-center space-x-2'>
          <div className='flex -space-x-2'>
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                src={`/images/avatar-${i + 1}.png`}
                alt='happy client'
                width={32}
                height={32}
                className='rounded-full border border-white'
              />
            ))}
          </div>
          <div className='text-yellow-500 text-sm'>★★★★★</div>
        </div>
        {/* <button className='bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800'>
          Book a Call
        </button> */}
      </div>

      {/* Info Cards */}
      <div className='grid md:grid-cols-4 gap-6'>
        <div className='bg-green-900/80 rounded-2xl p-6 text-white flex flex-col justify-between'>
          <h3 className='text-lg font-semibold italic'>Tailored Solutions</h3>
          <p className='text-sm mt-3'>
            In-depth assessments and strategies customized to strengthen your
            operations and business growth.
          </p>
          <a href='#services' className='mt-4 text-sm underline font-semibold'>
            Learn More →
          </a>
        </div>

        <div className='rounded-2xl overflow-hidden relative'>
          <Image
            src={dataSite.image_hero}
            alt='business meeting'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-0'
          />
          <div className='relative z-10 p-6 bg-black/50 h-full flex flex-col justify-end text-white'>
            <p className='text-3xl font-bold'>20+</p>
            <p className='text-xs mt-1 font-semibold'>SUCCESSFUL PROJECTS</p>
            <p className='text-xs mt-2'>
              We’ve helped businesses streamline operations and implement
              strategies that deliver real, measurable results.
            </p>
          </div>
        </div>

        <div className='bg-green-200 text-black rounded-2xl p-6 flex flex-col justify-between'>
          <h3 className='italic text-lg font-semibold'>Get in Touch</h3>
          <p className='text-sm mt-3'>
            Ready to take your business to the next level? Schedule a
            consultation with our expert team today.
          </p>
          <a
            href='/more-information'
            className='mt-4 text-sm underline font-semibold'
          >
            Contact Us →
          </a>
        </div>

        <div className='rounded-2xl overflow-hidden relative'>
          <Image
            src={dataSite.image_hero2}
            alt='consulting team'
            layout='fill'
            objectFit='cover'
            className='absolute inset-0 z-0'
          />
          <div className='relative z-10 p-6 bg-black/50 h-full flex flex-col justify-end text-white'>
            {/* <p className='text-3xl font-bold'>15+</p>
            <p className='text-xs font-semibold'>YEARS OF EXPERIENCE</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
