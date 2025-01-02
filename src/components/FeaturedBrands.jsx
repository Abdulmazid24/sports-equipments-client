import React from 'react';

const FeaturedBrands = () => {
  const brands = [
    {
      name: 'Nike',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg',
    },
    {
      name: 'Adidas',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
    },
    {
      name: 'Puma',
      logo: 'https://i.ibb.co.com/gRTXgT3/Puma-Logo-PNG1.png',
    },
    {
      name: 'Under Armour',
      logo: 'https://i.ibb.co.com/3Nbgxwq/Under-Armour-Logo-PNG1.png',
    },
  ];

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-300">
        Featured Brands
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-blue-100 border rounded-lg p-4"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-24 h-24 object-contain"
            />
            <p className="mt-4 font-bold text-gray-700">{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBrands;
