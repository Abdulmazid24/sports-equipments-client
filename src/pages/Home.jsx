import React from 'react';

import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';

const Home = () => {
  const equipments = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {equipments.map(equipment => (
        <EquipmentCard
          key={equipment._id}
          equipment={equipment}
        ></EquipmentCard>
      ))}
    </div>
  );
};

export default Home;
