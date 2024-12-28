const EquipListCard = ({ equipment }) => {
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
  } = equipment;
  return (
    <div className="relative bg-cover bg-center rounded-sm border overflow-hidden hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-indigo-950 via-black to-indigo-950 hover:bg-gray-950">
      <div className="relative z-10 flex flex-col justify-between h-full p-4 text-white">
        <h3 className="text-3xl font-bold mb-2">{itemName}</h3>
        <p className="text-lg font-medium mb-4">description</p>
        <button className="bg-gradient-to-r from-indigo-950 via-black to-indigo-950 hover:bg-gray-950 text-white font-semibold py-2 px-4 rounded-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default EquipListCard;
