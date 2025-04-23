'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { dataSite } from '@/data';
import { useState } from 'react';

const services = dataSite.services;

const ServicesGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id='services'
      className='bg-[#f8fdf6] px-6 md:px-20 py-20 text-black'
    >
      <div className='flex justify-between items-center mb-10'>
        <h2 className='text-3xl md:text-4xl font-semibold italic'>
          LET’S WORK TOGETHER TO GROW YOUR BUSINESS
        </h2>
        {/* <button className='bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800'>
          SEE MORE SERVICES
        </button> */}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {services.map((service, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={index}
              className='relative group overflow-hidden rounded-3xl h-[450px]'
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                layout='fill'
                objectFit='cover'
                className='absolute inset-0 z-0'
              />

              {/* Overlay */}
              <div className='absolute inset-0 bg-black/50 z-10 flex flex-col justify-between p-6 transition-all'>
                <h3 className='text-white font-semibold italic text-lg z-20'>
                  {service.title.toUpperCase()}
                </h3>

                {/* Description Overlay triggered by button hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.3 }}
                  className='absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4 text-sm z-20'
                >
                  {service.description}
                </motion.div>

                {/* Hover Button */}
                <motion.button
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className='z-20 mt-auto ml-auto bg-white/20 hover:bg-white/30 text-white border border-white w-10 h-10 rounded-full flex items-center justify-center transition-all'
                >
                  {isHovered ? (
                    <ArrowUpRight className='w-5 h-5' />
                  ) : (
                    <ArrowDownRight className='w-5 h-5' />
                  )}
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGallery;
