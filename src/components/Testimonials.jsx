import React from 'react';
import { FcBusinessman } from 'react-icons/fc';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback:
        "I purchased a cricket bat from this store, and it's fantastic! Highly recommend their products.",
      image:
        'https://i.ibb.co.com/ZLRFXKY/drew-hays-ag-GIKYs4m-Ys-unsplash.jpg',
    },
    {
      name: 'Jane Smith',
      feedback:
        "The quality of the football gear is amazing. I'll definitely buy again!",
      image:
        'https://i.ibb.co.com/TBJVMhJ/christian-buehner-DIt-Ylc26z-VI-unsplash.jpg',
    },
    {
      name: 'Michael Brown',
      feedback:
        'Great customer service and excellent range of sports equipment. 5 stars!',
      image:
        'https://i.ibb.co.com/ZLRFXKY/drew-hays-ag-GIKYs4m-Ys-unsplash.jpg',
    },
  ];

  return (
    <section className="my-16  py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-purple-500">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-green-100 shadow-lg rounded-lg p-6 text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-950  mb-4 font-medium">
              "{testimonial.feedback}"
            </p>
            <p className="font-bold text-gray-950">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
