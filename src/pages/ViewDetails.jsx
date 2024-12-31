import React from 'react';
import { useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ViewDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const equipmentsDetails = useLoaderData();
  console.log(equipmentsDetails);
  const {
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = equipmentsDetails;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 via-black to-indigo-950  flex justify-center items-center py-12 px-4 text-white">
      <div className="bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 text-white">
          {/* Image Section */}
          <div className="relative">
            <img
              src={image}
              alt={itemName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="p-6 flex flex-col justify-between">
            {/* Item Name */}
            <h2 className="text-3xl font-bold ">{itemName}</h2>

            {/* Category */}
            <p className="text-lg  mt-1">
              Category: <span className="font-medium">{categoryName}</span>
            </p>

            {/* Description */}
            <p className="text-lg font-thin mt-4">{description}</p>

            {/* Price */}
            <p className="text-lg font-thin mt-4">Price: {price} $</p>

            {/* Rating */}
            <div className="flex items-center mt-2">
              <p className="">Rating: </p>
              <div className="flex items-center ml-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.floor(rating)
                        ? 'text-yellow-500'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <p className="ml-2 ">({rating})</p>
              </div>
            </div>

            {/* Customization */}
            <p className="text-lg  mt-4">
              Customization:{' '}
              <span className=" text-lg font-thin">{customization}</span>
            </p>

            {/* Processing Time */}
            <p className="text-lg  mt-2">
              Processing Time:{' '}
              <span className="font-thin">{processingTime}</span>
            </p>

            {/* Stock Status */}
            <p className="text-sm  mt-2">
              Stock Status: <span className="font-medium">{stockStatus}</span>
            </p>

            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="mt-6 bg-black text-white py-2 px-4 font-bold rounded hover:bg-white hover:text-black transition border border-inherit"
            >
              Back to List
            </button>
            <button
              onClick={() => navigate('/')}
              className="mt-6 font-bold bg-black text-white py-2 px-4 rounded hover:bg-white hover:text-black transition border border-inherit"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
