import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import CallToActionButton from '../UI/CallToActionButton';
import PackageSelection from '../PackageSelection/PackageSelection';
import Faqs from '../Faqs/Faqs';
import StickyBanner from '../StickyBanner/StickyBanner';
import Reviews from '../Reviews/Reviews';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const Slideshow = dynamic(() => import('../Slideshow/Slideshow'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-200 animate-pulse rounded-lg"></div>,
});

const Content: React.FC = () => {
  return (
    <div className="min-h-screen bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
      <div className="w-full bg-[url('/bg.webp')] bg-cover bg-fixed bg-repeat bg-center">
        <div className="w-full max-w-[1240px] mx-auto pt-5 lg:px-20 bg-white">
          <Slideshow />
        </div>
      </div>
      <div className="w-full max-w-[1240px] mx-auto px-5 py-1 lg:px-20 bg-white">
        <div className="space-y-2">
          <div className="mt-1 mb-8">
            <div className="mt-1">
              <AddToCartButton />
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-10">
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <div className="relative w-6 h-6">
                  <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="font-semibold text-lg sm:text-2xl whitespace-nowrap">
                112 Reviews
              </span>
            </div>
          </div>
          {/* Testimonial Section */}
          <div className="max-w-4xl mx-auto mb-8 p-4 bg-[#f9f9f9] rounded-lg shadow-sm border border-[#ddd]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="relative">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image
                    src="/contentimages/testimonialLSSHolsterMobilesize.webp"
                    alt="Don T."
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 56px, 64px"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-[#2f78c9] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  <span className="font-extrabold text-[14px]">✓</span>
                </div>
              </div>
              <div className="text-center sm:text-left min-w-[120px]">
                <div className="font-bold">Don T.</div>
                <div className="text-[13px] text-[#555] mb-1">Verified Buyer</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-lg font-semibold mb-1 font-inter">Top Review</div>

                <div className="text-yellow-400 text-xl">★★★★★</div>

                <span className="font-semibold text-[16px] mb-3 block font-inter">
                  I've already saved $100s in ammo and range time!
                </span>

                <span className="text-[14px] text-[#555] leading-tight block font-inter">
                  "It's a fantastic tool for improving trigger control. The setup is simple and
                  helps refine each shot. It's a cost-effective way to train without wasting ammo.
                  Highly recommended for anyone serious about honing their shooting skills!"
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-5 px-0">
            <Image
              src="/contentimages/BlockImage1Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center pb-1 -mb-6 md:mb-0 md:pt-1">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-0 px-2">
              <div className="font-jawbreak uppercase">LOVE IT OR YOU DON'T PAY A DIME!</div>
            </h1>
          </header>
          <div className="mt-1 mb-8">
            <div className="mt-1">
              <AddToCartButton />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="w-full max-w-4xl mx-auto my-6 px-3 py-5">
            <div className="flex justify-between items-center sm:flex-wrap sm:justify-center sm:gap-4">
              <div className="w-[22%] sm:w-[140px] h-auto aspect-[140/120] relative">
                <Image
                  src="/contentimages/VNSH_MONEY-BACK.webp"
                  alt="Money Back Guarantee"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[24%] sm:w-[165px] h-auto aspect-[165/120] relative">
                <Image
                  src="/contentimages/VNSH_SECURE-CHECKOUT.webp"
                  alt="Secure Checkout"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[24%] sm:w-[170px] h-auto aspect-[170/120] relative">
                <Image
                  src="/contentimages/VNSH_aMERICAN.webp"
                  alt="American Made"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
              <div className="w-[24%] sm:w-[170px] h-auto aspect-[170/120] relative">
                <Image
                  src="/contentimages/VNSH_FAST-SHIP.webp"
                  alt="Fast Shipping"
                  fill
                  className="object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <header id="benefits" className="text-center pb-1 -mb-6 md:mb-0 md:pt-1">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-4 px-2">
              <div className="font-jawbreak uppercase">
                Why This System Ensures You{' '}
                <span className="text-[#ff0000] underline">
                  Make The One Shot You Can't Afford To Miss
                </span>
              </div>
            </h1>
          </header>
          <div className="space-y-4 text-xl leading-tight md:text-xl font-inter">
            <p>
              ✅ <span className="font-bold">Helps Eliminate “Recoil Flinch”:</span> Recoil itself
              has zero impact on your accuracy. But your anticipation of recoil can have a serious
              impact. Since the Laser Strike takes recoil out of the equation, you can train
              yourself to eliminate the “recoil flinch” that plagues so many shooters.
            </p>
            <p>
              🔫 😌 <span className="font-bold">Reduces Firearm Wear-and-Tear:</span> Not only is
              the Laser Strike guaranteed to be 100% safe for your guns, but it also minimizes
              overall wear and the frequency with which you need to clean them – since it reduces
              the amount of live ammo you use.
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-5 px-0">
            <Image
              src="/contentimages/BlockImage2Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4 text-xl leading-tight md:text-xl font-inter">
            <p>
              🔄 <span className="font-bold">Works With a Wide Range of Firearms:</span> If your gun
              shoots 9MM, .45 ACP, .40 S&W, and .380 ACP, then it will work with the Laser Strike.
              Just be sure to select the appropriate caliber when placing your order.
            </p>
            <p>
              🛡️ <span className="font-bold">100% Safe (and Quiet) for Home Use:</span> After
              ensuring your gun is fully unloaded and contains nothing but the laser cartridge, the
              Laser Strike lets you safely practice around friends and family with zero worry.
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-0 px-0">
            <Image
              src="/contentimages/BlockImage3Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4 text-xl leading-tight md:text-xl md:py-4 py-4 font-inter">
            <p>
              🙌 <span className="font-bold">Incredibly Simple to Setup ANYWHERE:</span> All it
              takes is 5 yards of space and 5 minutes of prep to start training anywhere you want!
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] px-0 md:px-0">
            <Image
              src="/contentimages/BlockImage4Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center pt-2 pb-1 -mb-6 md:mb-0 md:pt-4">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-0 px-2">
              <div className="font-jawbreak uppercase">
                <span className="text-[#ff0000]">Limited Free Bonus Gift (Worth $80)</span> Get Our
                "World's Comfiest" Holster Free!
              </div>
            </h1>
          </header>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] py-4 px-0 md:px-0">
            <Image
              src="/contentimages/BlockImage5Desktop.webp"
              alt="Laser Strike System"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <div className="space-y-4 font-inter">
            <p className="text-lg leading-relaxed mb-4">
              For a short time, we’re sending out our flagship product – the VNSH Holster –{' '}
              <span className="font-bold">
                100% FREE with every Laser Strike order (from this page ONLY!)
              </span>
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our mission is simple… to help Americans defend themselves as{' '}
              <span className="font-bold italic">easily and effectively</span> as possible
              everywhere they go.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              That’s why we set out to create the most comfortable holster on the planet… which has
              sold over 255,234 units since we launched late last year.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              📈 <span className="font-bold">America’s Fastest-Growing Holster Company</span>: More
              than 250,000 sold since Jan 1, 2023. All because of exceptional comfort, safety and
              our commitment to customer satisfaction.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              🏃‍♂️😌 <span className="font-bold">Made For Comfort and Durability</span>: We made the
              VNSH holster to be comfortable first. We used top-shelf materials from premium
              athletic wear, along with ultra soft and supportive “yoga pant” material, supple
              microfiber and 1000D Denier Nylon.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              🔄{' '}
              <span className="font-bold">Works With Any Clothes + Multiple Carry Positions</span>:
              Our belt (available in 48" or 68" works with any clothes and gets you carrying in
              multiple positions.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              🛡️ <span className="font-bold">Safe and Secure</span>: Trigger protection guaranteed
              thanks to thermo-molded plastic trigger guard and our magnetic retention strap keeps
              your firearms locked down.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              🔄 <span className="font-bold">Works with MOST Pistols</span>: Our unique holster
              works with 99% of pistols and many small-frame revolvers so you can use 1 holster for
              all your guns* (will not work with most weapon lights).
            </p>
          </div>
          <div className="w-full md:w-[85%] mx-auto max-w-[1120px] px-0 md:px-0 md:py-5">
            <Image
              src="/contentimages/VNSH-GrayHolster-BlockImages-V2-Desktop.webp"
              alt="VNSH Gray Holster"
              className="w-full h-auto"
              width={1120}
              height={600}
              priority
            />
          </div>
          <header className="text-center pt-2 pb-1 -mb-6 md:mb-0 md:py-4">
            <h1 className="text-3xl sm:text-3xl md:text-[46px] font-medium leading-[1] md:leading-tight mb-0 px-2">
              <div className="font-jawbreak uppercase">
                Plus... You're Getting An Iron-Clad, Money-Back Guarantee
              </div>
            </h1>
          </header>
          <div className="space-y-6">
            <div className="w-4/5 md:w-[30%] mx-auto px-4 md:px-0">
              <Image
                src="/contentimages/VNSH_MONEY-BACK.webp"
                alt="VNSH Holster deal"
                className="w-full h-auto"
                width={1120}
                height={600}
                priority
              />
            </div>
            <div className="font-inter">
              <p>Love everything about your order, or we’ll refund you every penny.</p>
              <p>It’s that simple.</p>
              <p>
                If you aren’t totally thrilled, all you have to do is contact our US-Based Support
                Team within 60 days to get a full refund.
              </p>
              <p className="font-bold">
                Plus, we also give you a 2-year workmanship guarantee as well!
              </p>
              <p>
                We know you’ll love your VNSH gear, which is why we’re happy to extend you these
                iron-clad guarantees.
              </p>
              <p>
                So if you want to get an awesome price on the{' '}
                <span className="font-bold italic">
                  fastest, easiest way to become a dead accurate shooter…
                </span>
              </p>
              <p id="package-selection" className="text-lg md:text-xl font-medium mb-8">
                Then you owe it to yourself to grab this deal now!
              </p>
            </div>
            {/* Reviews Component */}
            <div className="mb-12">
              <Reviews />
            </div>

            {/* Package Selection Component */}
            <div id="targetselection">
              <PackageSelection />
            </div>

            <header id="faqs" className="text-center pt-2 pb-1 -mb-6 md:mb-0 md:py-4">
              <h1 className="text-3xl sm:text-3xl md:text-[46px] leading-[1] md:leading-tight mb-0 px-2">
                <div className="font-jawbreak uppercase font-bold [text-shadow:0.5px_0_0_black]">
                  Frequently Asked Questions
                </div>
              </h1>
            </header>
          </div>
        </div>
        <StickyBanner />
      </div>
    </div>
  );
};

export default Content;
