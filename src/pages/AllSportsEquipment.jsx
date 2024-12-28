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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">
        All Sports Equipment
      </h1>

      {loading ? (
        <p className="text-center text-lg font-medium">Loading...</p>
      ) : equipments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Image</th>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Price</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {equipments.map(equipment => (
                <tr key={equipment._id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">
                    <img
                      src={equipment.image}
                      alt={equipment.itemName}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">{equipment.itemName}</td>
                  <td className="py-2 px-4 border-b">
                    {equipment.categoryName}
                  </td>
                  <td className="py-2 px-4 border-b">${equipment.price}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() =>
                        navigate(`/equipment-details/${equipment._id}`)
                      }
                      className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded shadow hover:bg-blue-600"
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
