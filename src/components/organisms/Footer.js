'use client';
import { useRouter } from 'next/navigation';
import { footerData } from '@/data';
import { Footer as FooterComponent } from 'ecommerce-mxtech';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();

  return (
    <FooterComponent
      backgroundColor='#0f0f0f'
      legal={footerData}
      onRedirect={(path) => {
        window.open(path, '_blank');
      }}
      textColor={'white'}
      visaImage='/images/visaMaster.png'
    />
  );
};

export default Footer;
