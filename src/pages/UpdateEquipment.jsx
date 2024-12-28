import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateEquipment = () => {
  const equipment = useLoaderData();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {
    _id,
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = equipment;

  const handleUpdateEquipment = e => {
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
    const updatedEquipment = {
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
    console.log(form, updatedEquipment);
    // send data to the server
    fetch(`http://localhost:5000/equipments/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Sports equipment product added Successfully',
            showConfirmButton: true,
            timer: 1500,
          });
        }
      });
    // .catch(error => {
    //   const errorMessage = error.message;
    //   setErrorMessage(errorMessage);
    // });
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-950 via-black to-indigo-950 flex justify-center items-center py-4">
      <div className="bg-white p-8 rounded-lg border-4 border-amber-950 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-950 via-black to-indigo-950">
          Update a Sports Equipment{itemName}
        </h2>

        <form
          onSubmit={handleUpdateEquipment}
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
              defaultValue={image}
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
              defaultValue={itemName}
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
              defaultValue={categoryName}
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
              defaultValue={description}
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
              defaultValue={price}
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
              defaultValue={rating}
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
              defaultValue={customization}
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
              defaultValue={processingTime}
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
              defaultValue={stockStatus}
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

export default UpdateEquipment;
