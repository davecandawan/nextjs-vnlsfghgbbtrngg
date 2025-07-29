import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const PackageSelection: React.FC = () => {
  const [isGooglebot, setIsGooglebot] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // This will only run on the client side
    setIsGooglebot(/Googlebot/i.test(navigator.userAgent));
  }, []);

  // Get all current URL parameters
  const getCheckoutUrl = (baseUrl: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const queryString = params.toString();
    return `${baseUrl}${queryString ? `?${queryString}` : ''}`;
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
        {/* Starter Package */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 w-[320px] flex flex-col order-3 lg:order-1">
          <div className="relative w-full h-auto overflow-hidden bg-white aspect-square">
            <Image
              src="/contentimages/StarterMobileU.webp"
              alt="Starter Package"
              fill
              className="object-contain object-top"
              priority
            />
          </div>
          <div className="pt-0 px-4 pb-4 flex-grow flex flex-col bg-white">
            <div className="flex justify-center items-center gap-2">
              <span className="text-5xl font-bold text-black">$99</span>
              <span className="text-[#ff0000] text-lg font-bold">+ S&H</span>
            </div>
            <div className="text-black font-bold text-xl mb-2 text-center pt-2">
              You Saved $159.00
            </div>
            <div className="text-black text-center mb-4 text-xl">(Pick Your Caliber)</div>
            <div className="mb-1 -ml-6">
              <ul className="list-none p-0 m-0">
                <li className="flex items-start bg-black text-white px-3 py-0.5 rounded mb-2">
                  <span className="text-white mr-2 text-base">+</span>
                  <span className="text-base">FREE VNSH Holster - Gray</span>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vnlsfghgbbtrngg/starter-checkout')}
                target="_self"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full h-16 group">
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src="/contentimages/VNSH_add_to_cart_electric_green.avif"
                      alt="Add to Cart"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100%, 33%"
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex justify-center">
                <div className="relative w-3/5 h-10">
                  <Image
                    src="/contentimages/BlackBundleCardImage.avif"
                    alt="Payment Methods"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100%, 33%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultimate Package */}
        <div
          className={`bg-white rounded-2xl shadow-md overflow-hidden border-[3px] border-[#a3a0a0] w-[320px] flex flex-col order-1 lg:order-2 ${isGooglebot ? 'hidden' : ''}`}
        >
          <div className="relative w-full h-96 overflow-hidden bg-[#ededed]">
            <Image
              src="/contentimages/AdvancedMobileU2.webp"
              alt="Ultimate Package"
              fill
              className="object-contain object-top"
              priority
            />
          </div>
          <div className="pt-0 px-4 pb-4 flex-grow flex flex-col bg-[#ededed]">
            <div className="flex justify-center items-center gap-2">
              <span className="text-5xl font-bold text-black">$199</span>
              <span className="text-[#ff0000] text-lg font-bold">+ Free S&H</span>
            </div>
            <div className="text-black font-bold text-xl mb-2 text-center pt-2">
              You Saved $416.80
            </div>
            <div className="mb-1 -ml-6">
              <ul className="list-none p-0 m-0">
                <li className="flex items-start bg-black text-white px-3 py-0.5 rounded mb-2">
                  <span className="text-white mr-2 text-base">+</span>
                  <span className="text-[15px]">
                    All Calibers <span className="text-sm">(9mm, .380, .40 & .45)</span>
                  </span>
                </li>
                <li className="flex items-start bg-black text-white px-3 py-0.5 rounded mb-2">
                  <span className="text-white mr-2 text-base">+</span>
                  <span className="text-base">FREE VNSH Holster - Gray</span>
                </li>
                <li className="flex items-start bg-black text-white px-3 py-0.5 rounded mb-2">
                  <span className="text-white mr-2 text-base">+</span>
                  <span className="text-base">FREE - 2 MagMates</span>
                </li>
                <li className="flex items-start bg-black text-white px-3 py-0.5 rounded">
                  <span className="text-white mr-2 text-base">+</span>
                  <span className="text-base">FREE VNSH Holster - Black</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vnlsfghgbbtrngg/advanced-checkout')}
                target="_self"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full h-16 group">
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src="/contentimages/VNSH_add_to_cart_electric_green.avif"
                      alt="Add to Cart"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100%, 33%"
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex justify-center">
                <div className="relative w-3/5 h-10">
                  <Image
                    src="/contentimages/BlackBundleCardImage.avif"
                    alt="Payment Methods"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100%, 33%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Package */}
        <div
          className={`bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 w-[320px] flex flex-col order-2 ${isGooglebot ? 'hidden' : ''}`}
        >
          <div className="relative w-full h-96 overflow-hidden bg-white">
            <Image
              src="/contentimages/EnhancedMobileU2.webp"
              alt="Enhanced Package"
              fill
              className="object-contain object-top"
              priority
            />
          </div>
          <div className="pt-0 px-4 pb-4 flex-grow flex flex-col bg-white">
            <div className="flex justify-center items-center gap-2">
              <span className="text-5xl font-bold text-black">$149</span>
              <span className="text-[#ff0000] text-lg font-bold">+ Free S&H</span>
            </div>
            <div className="text-black font-bold text-xl mb-2 text-center pt-2">
              You Saved $207.89
            </div>
            <div className="text-black text-center mb-4 text-xl">(Pick Your Caliber)</div>
            <div className="mb-4 -ml-6">
              <ul className="list-none p-0 m-0">
                <li className="flex items-start bg-black text-white px-3 py-0.5 rounded mb-2">
                  <span className="text-white mr-2 text-base">+</span>
                  <span className="text-base">FREE 1 MagMate</span>
                </li>
                <li className="flex items-start bg-black text-white px-3 py-0.5 rounded mb-2">
                  <span className="text-white mr-2 text-base">+</span>
                  <span className="text-base">Extra Laser Cartridge</span>
                </li>
                <li className="flex items-start bg-black text-white px-3 py-0.5 rounded">
                  <span className="text-white mr-2 text-base">+</span>
                  <span className="text-base">FREE VNSH Holster - Gray</span>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <a
                href={getCheckoutUrl('https://secure.vnsh.com/vnlsfghgbbtrngg/enhanced-checkout')}
                target="_self"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="relative w-full h-16 group">
                  <div className="relative w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                    <Image
                      src="/contentimages/VNSH_add_to_cart_electric_green.avif"
                      alt="Add to Cart"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100%, 33%"
                    />
                  </div>
                </div>
              </a>

              <div className="mt-4 flex justify-center">
                <div className="relative w-3/5 h-10">
                  <Image
                    src="/contentimages/BlackBundleCardImage.avif"
                    alt="Payment Methods"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100%, 33%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageSelection;
