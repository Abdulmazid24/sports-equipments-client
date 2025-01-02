import { useState } from 'react';

const Banner = () => {
  const slides = [
    {
      title: 'Gear Up for Excellence',
      subtitle: 'Discover top-notch equipment for every sport.',
      cta: 'Shop Now',
    },
    {
      title: 'Exclusive Discounts Await!',
      subtitle: 'Save big on your favorite sports accessories.',
      cta: 'View Offers',
    },
    {
      title: 'One Store for All Sports',
      subtitle: 'From beginners to pros, we’ve got you covered.',
      cta: 'Explore Categories',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrentIndex(prev => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="mt-16 relative w-full  mx-auto overflow-hidden mb-5">
      <div className="py-16 bg-gradient-to-r from-indigo-500 via-red-300 to-purple-400">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-500 ${
              index === currentIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
          >
            {index === currentIndex && (
              <>
                <div className=" flex flex-col justify-center items-center text-center text-black">
                  <h2 className="text-5xl font-bold">{slide.title}</h2>
                  <p className="text-lg font-medium mt-2">{slide.subtitle}</p>
                  <button className="mt-4 px-6 py-2 bg-red-400 font-bold rounded-md text-black hover:bg-yellow-500">
                    {slide.cta}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white rounded-full p-2 hover:bg-gray-800"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white rounded-full p-2 hover:bg-gray-800"
      >
        ❯
      </button>
    </div>
  );
};

export default Banner;
