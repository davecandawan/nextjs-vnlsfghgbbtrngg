import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const StickyBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.offsetHeight;

      if (window.scrollY > 0 && scrollPosition < pageHeight - 1) {
        bannerRef.current.style.transform = 'translateY(0)';
      } else {
        bannerRef.current.style.transform = 'translateY(100%)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-0 left-0 w-full bg-white text-white text-center py-2.5 transform transition-transform duration-150 ease-in-out flex items-center justify-around z-[1000]"
      style={{ transform: 'translateY(100%)' }}
    >
      <div className="text-black font-bold text-[17px] md:text-[20px]">FREE Holster Bonus</div>
      <Link
        href="#targetselection"
        className="bg-[#6bf557] hover:bg-[#6bf557] text-black hover:text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 no-underline"
      >
        Buy Now
      </Link>
    </div>
  );
};

export default StickyBanner;
