'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: '/contentimages/VNSH_LaserStrike_HeroDesktop.webp',
      alt: 'Hero slide',
    },
    {
      image: '/contentimages/VNSH_LaserStrike_5Desktop.webp',
      alt: 'Laser Strike 5',
    },
    {
      image: '/contentimages/VNSH_LaserStrike_4Desktop.webp',
      alt: 'Image 3',
    },
    {
      image: '/contentimages/VNSH_LaserStrike_3Desktop.webp',
      alt: 'Laser Strike 3',
    },
    {
      image: '/contentimages/VNSH_LaserStrike_2Desktop.webp',
      alt: 'Laser Strike 2',
    },
    {
      image: '/contentimages/VNSH_LaserStrike_1Desktop.webp',
      alt: 'Laser Strike 2',
    },
    {
      image: '/contentimages/HolsterHero2.webp',
      alt: 'Image 6',
    },
    {
      image: '/contentimages/Desktop3.webp',
      alt: 'Image 7',
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
    resetTimer();
  };

  const startAutoChange = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
  };

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoChange();
  };

  useEffect(() => {
    setIsMounted(true);
    const timeout = setTimeout(() => {
      startAutoChange();
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(timeout);
    };
  }, []);

  if (!isMounted) {
    return <div className="w-full h-64 bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div className="relative w-full max-w-[53rem] mx-auto px-0 sm:px-4">
      {/* Main Slideshow */}
      <div className="relative w-full overflow-hidden" style={{ maxWidth: '100%' }}>
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                loading="lazy"
                style={{ maxWidth: '100%' }}
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="text-xl sm:text-2xl absolute left-0 sm:left-0 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-[#000000CC] text-white p-2 sm:p-3 rounded-none transition-all backdrop-blur-sm"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="text-xl sm:text-2xl absolute right-0 sm:right-0 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-[#000000CC] text-white p-2 sm:p-3 rounded-none transition-all backdrop-blur-sm"
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center space-x-3 sm:space-x-2 md:space-x-3 p-2 w-full overflow-x-auto">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 w-8 h-6 sm:w-12 sm:h-9 md:w-14 md:h-10.5 overflow-visible transition-all bg-transparent p-0 border-0 ${
              currentSlide === index ? 'ring-1 ring-gray-300' : 'opacity-70 hover:opacity-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <img
              src={slide.image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-none"
              loading="lazy"
              style={{ borderRadius: 0 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
