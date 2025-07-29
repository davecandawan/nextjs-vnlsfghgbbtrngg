'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import critical components directly
import Navbar from '@/components/Navbar/Navbar';
import Content from '@/components/Content/Content';

// Lazy load non-critical components
const Faqs = dynamic(() => import('@/components/Faqs/Faqs'), {
  loading: () => <div className="h-64 flex items-center justify-center">Loading FAQs...</div>,
  ssr: false,
});

const Footer = dynamic(() => import('@/components/Footer/Footer'), {
  loading: () => <div className="h-32 bg-gray-50"></div>,
  ssr: false,
});

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
    <div className="w-full max-w-[1240px] mx-auto px-5 py-1 lg:px-20 bg-[#242833]">{children}</div>
  </div>
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <Content />
        <Suspense
          fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}
        >
          <BackgroundWrapper>
            <Faqs />
          </BackgroundWrapper>
          <BackgroundWrapper>
            <Footer />
          </BackgroundWrapper>
        </Suspense>
      </main>
    </>
  );
}
