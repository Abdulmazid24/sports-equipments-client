import { useLoaderData } from 'react-router-dom';
import CardList from '../components/CardList';
import { useState } from 'react';

const MyEquipmentList = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  console.log(products.length);
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2
    "
    >
      {products.map(product => (
        <CardList
          key={product._id}
          product={product}
          products={products}
          setProducts={setProducts}
        ></CardList>
      ))}
    </div>
  );
};

export default MyEquipmentList;
