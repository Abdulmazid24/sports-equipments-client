import React from 'react';
import { Link } from 'react-router-dom';

const EquipmentCard = ({ equipment }) => {
  const { _id, image, itemName, description } = equipment;
  return (
    <div
      className="relative bg-cover bg-center rounded-sm border overflow-hidden hover:scale-105 transition-transform duration-300"
      style={{
        backgroundImage: `url(${image})`,
        height: '400px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
        {/* Item Name */}
        <h3 className="text-3xl font-bold mb-2">{itemName}</h3>

        {/* Short Description */}
        <p className="text-lg font-medium mb-4">{description}</p>

        {/* Details Button */}
        <Link
          to={`/viewDetails/${_id}`}
          className="bg-gradient-to-r from-indigo-950 via-black to-indigo-950 hover:bg-gray-950 text-white font-semibold py-2 px-4 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EquipmentCard;
