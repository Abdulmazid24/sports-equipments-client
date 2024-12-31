import { useState } from 'react';

const Banner = () => {
  const slides = [
    {
      image: 'https://i.ibb.co.com/09Qk61x/baseball.jpg',
      title: 'Gear Up for Excellence',
      subtitle: 'Discover top-notch equipment for every sport.',
      cta: 'Shop Now',
    },
    {
      image: 'https://i.ibb.co.com/ssYSc9X/pexels-pixabay-207489.jpg',
      title: 'Exclusive Discounts Await!',
      subtitle: 'Save big on your favorite sports accessories.',
      cta: 'View Offers',
    },
    {
      image:
        'https://i.ibb.co.com/D5FPF4j/pexels-cipriano-fernandes-265554875-12735076.jpg',
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
    <div className="mt-16 relative w-full h-96 mx-auto overflow-hidden">
      <div className="relative">
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
                <div className=" w-full h-96">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute top-1/2 left-1/2  bg-black bg-opacity-5 flex flex-col justify-center items-center text-center text-white">
                  <h2 className="text-4xl font-bold">{slide.title}</h2>
                  <p className="text-lg mt-2">{slide.subtitle}</p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700">
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
