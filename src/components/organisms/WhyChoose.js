'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Globe, Puzzle } from 'lucide-react';
import { dataSite } from '@/data';

const services = [
  {
    icon: <Briefcase className='w-5 h-5' />,
    title: dataSite.info[0].title,
    desc: dataSite.info[0].description,
  },
  {
    icon: <Building2 className='w-5 h-5' />,
    title: dataSite.info[1].title,
    desc: dataSite.info[1].description,
  },
  {
    icon: <Globe className='w-5 h-5' />,
    title: dataSite.info[2].title,
    desc: dataSite.info[2].description,
  },
  {
    icon: <Puzzle className='w-5 h-5' />,
    title: dataSite.info[3].title,
    desc: dataSite.info[3].description,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <section id='about' className='bg-[#f8fdf6] text-black px-6 md:px-20 py-20'>
      <div className='flex flex-col md:flex-row justify-between items-start gap-10'>
        {/* Left Image */}
        <motion.div
          className='md:w-1/3 rounded-3xl overflow-hidden'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src={dataSite.services[0].image}
            alt='consulting team'
            width={600}
            height={800}
            className='object-cover h-full w-full'
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className='md:w-2/3'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={container}
        >
          <div className='flex justify-between items-center mb-10'>
            <h2 className='text-3xl md:text-4xl font-semibold italic'>
              WHY PARTNER WITH US?
            </h2>
            {/* <button className='bg-black text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800'>
              START A PARTNERSHIP
            </button> */}
          </div>

          <div className='grid md:grid-cols-2 gap-10'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className='flex items-start space-x-4'
              >
                <div className='bg-green-100 p-2 rounded-lg text-green-800'>
                  {service.icon}
                </div>
                <div>
                  <h3 className='font-semibold italic'>{service.title}</h3>
                  <p className='text-sm text-gray-700 mt-1'>{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
