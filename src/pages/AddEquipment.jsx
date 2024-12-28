import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddEquipment = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSportsEquipment = e => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const newEquipment = {
      image,
      itemName,
      categoryName,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
    };
    console.log(form, newEquipment);
    // send data to the server
    fetch('http://localhost:5000/equipments', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newEquipment),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'product added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 via-black to-indigo-950 flex justify-center items-center py-4">
      <div className="bg-white p-8 rounded-lg border-4 border-amber-950 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-950 via-black to-indigo-950">
          Add New Sports Equipment
        </h2>

        <form
          onSubmit={handleSportsEquipment}
          className="space-y-3 font-bold  text-gradient-to-r from-indigo-900 via-gray-600 to-indigo-800"
        >
          {/* Image */}
          <div>
            <label htmlFor="image" className="block  py-2 font-bold">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              className="w-full p-2 border-2"
              placeholder="Enter the image URL"
            />
          </div>
          {/* Item Name */}
          <div>
            <label htmlFor="itemName" className="block  font-bold py-2 ">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              className="w-full p-2 border-2 "
              placeholder="Enter item name"
            />
          </div>
          {/* Category Name */}
          <div>
            <label htmlFor="categoryName" className="block  font-bold py-2 ">
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              className="w-full p-2 border-2 "
              placeholder="Enter category name"
            />
          </div>
          {/* Description */}
          <div>
            <label htmlFor="description" className="block  font-bold py-2 ">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full p-2 border-2 "
              rows="4"
              placeholder="Enter description"
            ></textarea>
          </div>
          {/* Price */}
          <div>
            <label htmlFor="price" className="block  font-bold py-2 ">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full p-2 border-2 "
              placeholder="Enter price"
            />
          </div>
          {/* Rating */}
          <div>
            <label htmlFor="rating" className="block  font-bold py-2 ">
              Rating
            </label>
            <input
              type="number"
              step="0.1"
              id="rating"
              name="rating"
              className="w-full p-2 border-2 "
              placeholder="Enter rating (e.g., 4.5)"
            />
          </div>
          {/* Customization */}
          <div>
            <label htmlFor="customization" className="block  font-bold py-2 ">
              Customization
            </label>
            <input
              type="text"
              id="customization"
              name="customization"
              className="w-full p-2 border-2 "
              placeholder="Enter customization options"
            />
          </div>
          {/* Processing Time */}
          <div>
            <label htmlFor="processingTime" className="block  font-bold py-2 ">
              Processing Time (Delivery)
            </label>
            <input
              type="text"
              id="processingTime"
              name="processingTime"
              className="w-full p-2 border-2"
              placeholder="Enter delivery time"
            />
          </div>
          {/* Stock Status */}
          <div>
            <label htmlFor="stockStatus" className="block  font-bold  py-2 ">
              Stock Status
            </label>
            <input
              type="text"
              id="stockStatus"
              name="stockStatus"
              className="w-full p-2 border-2"
              placeholder="Enter available quantity"
            />
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white p-2 rounded hover:shadow-lg transition duration-300"
          >
            Add Equipment
          </button>
        </form>
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 my-2 text-lg font-semibold">
            {errorMessage}
          </div>
        )}
        {successMessage && (
          <div className=" text-green-500 p-3 rounded mb-4">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddEquipment;