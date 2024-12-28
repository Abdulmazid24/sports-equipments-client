import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AllEquipment from '../pages/AllSportsEquipment';
import AddEquipment from '../pages/AddEquipment';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import MyEquipmentList from '../pages/MyEquipmentList';
import MainLayout from '../layout/MainLayout';
import AllSportsEquipment from '../pages/AllSportsEquipment';
import UpdateEquipment from '../pages/UpdateEquipment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/equipments'),
      },
      {
        path: '/allSportsEquipment',
        element: <AllSportsEquipment></AllSportsEquipment>,
      },
      {
        path: '/addEquipment',
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: '/myEquipmentList',
        loader: () => fetch('http://localhost:5000/equipments'),
        element: <MyEquipmentList></MyEquipmentList>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/updateEquipment/:id',
        element: <UpdateEquipment></UpdateEquipment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/equipments/${params.id}`),
      },
    ],
  },
  {
    path: '*',
    element: <NotFound></NotFound>,
  },
]);

export default router;
