import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <div className="px-10 mx-auto bg-gradient-to-r from-indigo-950 via-black to-indigo-950">
      <Navbar></Navbar>
      <div className=" py-10 bg-gradient-to-r from-indigo-950 via-black to-indigo-950">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
