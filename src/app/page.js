'use client';

import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import Image from 'next/image';
import Hero from '@/components/organisms/Hero';
import WhyChooseUs from '@/components/organisms/WhyChoose';
import ServicesGallery from '@/components/organisms/Services';
import TestimonialCarousel from '@/components/organisms/Testimonials';
import CallToActionBanner from '@/components/organisms/Banner';
import ProductShowcase from '@/components/organisms/Products';

export default function Home() {
  return (
    <main className='bg-[#0f0f0f] text-white'>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <ProductShowcase />
      <ServicesGallery />
      <TestimonialCarousel />
      <CallToActionBanner />
      <Footer />
    </main>
  );
}
