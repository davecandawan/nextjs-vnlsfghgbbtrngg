import React from 'react';
import Image from 'next/image';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Fred H.',
      stars: '★★★★★',
      date: 'I really like it',
      text: '"I really like it and how it fits. I gave my other VNSH holster to a Vietnam Vet friend of mine and he loves it too."',
      textClass: 'pl-2',
      image: '/contentimages/review7mobile.jpg',
      width: 120,
      height: 239,
    },
    {
      id: 2,
      name: 'Allen C.',
      stars: '★★★★★',
      date: "I've purchased a lot of holsters",
      text: "\"I've purchased a lot of holsters, this one is by far the best one I've purchased and will stick to. I've recommended it to my coworkers.\"",
      image: '/contentimages/review5mobile.webp',
      width: 120,
      height: 142,
    },
    {
      id: 3,
      name: 'Brandon C.',
      stars: '★★★★★',
      date: 'Absolutely enjoying this system!',
      text: '”It brings dry fire training to next level. Use it daily and have been making great strides in accuracy. I would love to see the app add a time record of first shot and then total time for that round. Overall, highly recommended to any and every skill set.”',
      textClass: 'pl-2',
      image: '/contentimages/LSStes1.webp',
      width: 120,
      height: 239,
    },
    {
      id: 4,
      name: 'Alicia B.',
      stars: '★★★★★',
      date: 'Equipment is perfect.',
      text: '”Just what I needed to improve my skills. Thank you!”',
      image: '/contentimages/LSStes2.jpg',
      width: 120,
      height: 142,
    },
    {
      id: 5,
      name: 'Darin P.',
      stars: '★★★★★',
      date: 'Most comfortable off duty holster',
      text: '"Most comfortable off duty holster I’ve had. Finally, dumped the fanny pack for carry."',
      image: '/contentimages/review6mobile.jpg',
      width: 120,
      height: 142,
    },
    {
      id: 6,
      name: 'Aaron M.',
      stars: '★★★★★',
      date: 'One of the best I’ve ever owned',
      text: "\"This holster has to be one of the best holsters I've ever owned. This thing is extremely versatile in terms how and where you can carry. Certain clothing don't allow me to carry at all but with this holster it's no longer a problem. They had an option for a larger sized person and I didn't believe i...\"",
      image: '/contentimages/reviewmobile.webp',
      width: 120,
      height: 119,
    },
    {
      id: 7,
      name: 'Kevin C.',
      stars: '★★★★★',
      date: 'This is a great product!',
      text: "”I'm so happy that I purchased this system. It has already helped with settling down my trigger pull.”",
      image: '/contentimages/LSStes3.webp',
      width: 120,
      height: 119,
    },
    {
      id: 8,
      name: 'Anthony L.',
      stars: '★★★★★',
      date: 'I love this system.',
      text: "”Just recommended it to my brother-in-law. I don't get to shoot as much as I would like. However, a few minutes with the system helps trigger control and sighting, improving speed and accuracy. I highly recommend it. Easy to set up and use just about anywhere!”",
      textClass: 'pl-2',
      image: '/contentimages/LSStes4.webp',
      width: 120,
      height: 239,
    },
  ];

  const firstColumn = reviews.slice(0, 4);
  const secondColumn = reviews.slice(4);

  return (
    <div className="mt-20 mb-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {firstColumn.map(review => (
            <div
              key={review.id}
              className="bg-white p-3 px-4 sm:px-3 flex flex-row-reverse gap-4 border-[1px] border-[#c4c1c1]"
            >
              {review.image ? (
                <div className="flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={`${review.name}'s review`}
                    width={review.width}
                    height={review.height}
                    className="rounded"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-24 flex-shrink-0"></div>
              )}
              <div className="flex-1">
                <div className={`${review.textClass || ''}`}>
                  <div className="mb-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-bold text-lg">{review.name}</span>
                      <span className="text-[#ffd700] text-xl">{review.stars}</span>
                    </div>
                  </div>
                  <span className="font-bold text-black-600 text-[15px] mb-3 block">
                    {review.date}
                  </span>
                </div>
                <div className={`text-[#555] text-sm block mt-2 ${review.textClass || ''}`}>
                  {review.text}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-3">
          {secondColumn.map(review => (
            <div
              key={review.id}
              className="bg-white p-3 px-4 sm:px-3 flex flex-row-reverse gap-4 border-[1px] border-[#c4c1c1]"
            >
              {review.image ? (
                <div className="flex-shrink-0">
                  <Image
                    src={review.image}
                    alt={`${review.name}'s review`}
                    width={review.width}
                    height={review.height}
                    className="rounded"
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-24 flex-shrink-0"></div>
              )}
              <div className="flex-1">
                <div className={`${review.textClass || ''}`}>
                  <div className="mb-1">
                    <div className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className="font-bold text-lg">{review.name}</span>
                      <span className="text-[#ffd700] text-xl">{review.stars}</span>
                    </div>
                  </div>
                  <span className="font-bold text-black-600 text-[15px] mb-3 block">
                    {review.date}
                  </span>
                </div>
                <div className={`text-[#555] text-sm block mt-2 ${review.textClass || ''}`}>
                  {review.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
