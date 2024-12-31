import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllSportsEquipment = () => {
  const [equipments, setEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch Equipment Data
  useEffect(() => {
    fetch('http://localhost:5000/equipments') // Replace with your backend endpoint
      .then(res => res.json())
      .then(data => {
        setEquipments(data);
        setLoading(false);
      })
      .catch(err => console.error('Error fetching equipment:', err));
  }, []);

  return (
    <div className="py-10 bg-gradient-to-r from-indigo-950 via-black to-indigo-950 min-h-screen font-semibold">
      <h1 className="text-3xl text-white font-bold text-center mb-6">
        All Sports Equipment
      </h1>

      {loading ? (
        <p className="text-center text-lg font-medium">Loading...</p>
      ) : equipments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gradient-to-r from-indigo-950 via-black to-indigo-950  text-white   text-center">
            <thead className="text-center p-3 border-b-4  py-5">
              <tr>
                <th className="py-3 px-4 ">Image</th>
                <th className="py-3 px-4 ">Name</th>
                <th className="py-3 px-4 border-b">Category</th>
                <th className="py-3 px-4 ">Price</th>
                <th className="py-3 px-4 ">Action</th>
              </tr>
            </thead>
            <tbody className="text-center  ">
              {equipments.map(equipment => (
                <tr
                  key={equipment._id}
                  className="hover:bg-gray-100 hover:text-gray-950 mt-2"
                >
                  <td className="py-2 px-4 border-b">
                    <img
                      src={equipment.image}
                      alt={equipment.itemName}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border-b rounded-b-xl">
                    {equipment.itemName}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {equipment.categoryName}
                  </td>
                  <td className="py-2 px-4 border-b">${equipment.price}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => navigate(`/viewDetails/${equipment._id}`)}
                      className="px-4 py-2 bg-gray-950 text-white text-sm font-semibold border border-inherit rounded shadow hover:bg-black "
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg font-medium">
          No equipment found. Please add some equipment to display here.
        </p>
      )}
    </div>
  );
};

export default AllSportsEquipment;
