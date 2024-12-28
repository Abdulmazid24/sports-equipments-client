import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardList = ({ product, products, setProducts }) => {
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
  } = product;
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/equipments/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remaining = products.filter(prod => prod._id !== id);
              setProducts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="relative bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white rounded-lg shadow-md overflow-hidden hover:scale-100 transition-transform duration-300 flex flex-col md:flex-row md:justify-between p-4 gap-2 border border-inherit space-y-3">
      {/* Image Section */}
      <div className="w-1/3 hover:w-full p-3  rounded-sm transition-transform duration-300">
        <img src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="space-y-2">
        <div>
          <h3 className="text-xl font-bold">{itemName}</h3>
          <p className="text-sm font-medium">{description}</p>
        </div>
        <div className="">
          <p className="font-semibold">
            Price : <span className="font-medium ml-2">{price}</span>
          </p>
          <p className="font-bold">
            customization :{' '}
            <span className="font-medium ml-2">{customization}</span>
          </p>
        </div>
        <div className="font-semibold">
          <p>
            Category : <span className="font-medium ml-2"> {categoryName}</span>
          </p>
          <p>Rating : {rating}</p>
        </div>
        <div className="flex justify-between items-center font-bold">
          <Link to={`/updateEquipment/${_id}`}>
            <button className="bg-red-100 block hover:bg-blue-600 text-black px-4 py-2 rounded-md">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
