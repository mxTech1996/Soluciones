'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { dataSite } from '@/data';

const testimonials = dataSite.references;

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  const initials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id='testimonials'
      className=' text-white py-20 px-6 md:px-20 relative'
    >
      <h1 className='text-3xl md:text-4xl font-semibold text-center mb-10'>
        WHAT OUR CLIENTS SAY
      </h1>
      <div className='max-w-4xl mx-auto text-center relative'>
        {/* Quote icon */}
        <div className='text-green-400 text-4xl mb-6'>“</div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className='text-xl italic leading-relaxed mb-6'>
              {testimonial.description}
            </p>

            {/* Profile */}
            <div className='flex items-center justify-center gap-4 mt-4'>
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-10 h-10 rounded-full object-cover'
                />
              ) : (
                <div className='w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold'>
                  {initials(testimonial.name)}
                </div>
              )}
              <div className='text-left'>
                <p className='font-semibold'>{testimonial.name}</p>
                <p className='text-green-400 text-sm'>Client</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className='absolute -left-10 top-1/2 transform -translate-y-1/2'>
          <button
            onClick={prev}
            className='text-white hover:text-green-400 p-2'
          >
            <ArrowLeft className='w-6 h-6' />
          </button>
        </div>
        <div className='absolute -right-10 top-1/2 transform -translate-y-1/2'>
          <button
            onClick={next}
            className='text-white hover:text-green-400 p-2'
          >
            <ArrowRight className='w-6 h-6' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
