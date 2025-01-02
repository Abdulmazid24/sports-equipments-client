import React from 'react';

import { useLoaderData } from 'react-router-dom';
import EquipmentCard from '../components/EquipmentCard';
import Banner from '../components/Banner';
import Testimonials from '../components/Testimonials';
import FeaturedBrands from '../components/FeaturedBrands';

const Home = () => {
  const equipments = useLoaderData();
  return (
    <>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {equipments.map(equipment => (
          <EquipmentCard
            key={equipment._id}
            equipment={equipment}
          ></EquipmentCard>
        ))}
      </div>
      <div>
        <FeaturedBrands></FeaturedBrands>
      </div>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
