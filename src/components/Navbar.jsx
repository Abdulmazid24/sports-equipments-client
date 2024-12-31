import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-gradient-to-r from-indigo-950 via-black to-indigo-950 text-white fixed top-0 left-0 w-full bg-blue-600  shadow-lg z-50 border-b border-inherit">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold"
          >
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>

            <li>
              <NavLink to={'/allSports'}>All Sports Equipment</NavLink>
            </li>
            <li>
              <NavLink to={'/addEquipment'}>Add Equipment</NavLink>
            </li>
            <li>
              <NavLink to={'/myEquipmentList'}>My Equipment List</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold">EquiSports</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold ">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>

          <li>
            <NavLink to={'/allSportsEquipment'}>All Sports Equipment</NavLink>
          </li>
          <li>
            <NavLink to={'/addEquipment'}>Add Equipment</NavLink>
          </li>
          <li>
            <NavLink to={'/myEquipmentList'}>My Equipment List</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <NavLink to={'/signup'}>
          <button className="px-3 py-1 font-bold border-2 rounded-md">
            Sign Up
          </button>
        </NavLink> */}
        <div className="navbar-end font-bold text-lg">
          {user && user.email ? (
            <button className=" border-2 rounded-full mx-2">
              <img
                className="w-10 h-10 rounded-full"
                title={user?.displayName}
                src={user?.photoURL}
                alt=""
              />
            </button>
          ) : (
            <button
              title="user don't sign Up Please Sign Up"
              className="p-3 border-2 rounded-full mx-2"
            >
              <FaUser />
            </button>
          )}
          {user && user?.email ? (
            <button
              onClick={logOut}
              className="px-3 py-2 border-2 bg-black text-white font-medium text-base rounded-md p-1"
            >
              Log Out
            </button>
          ) : (
            <Link to={'/login'}>
              <button className=" px-3 py-1 rounded-md border-2 font-bold bg-black text-white">
                Login
              </button>
            </Link>
          )}
          {user && (
            <button
              title="Your profile"
              className="px-3 py-1 border-2 border-black rounded-full bg-gray-500 text-white text-2xl font-normal mx-3"
            >
              <Link to={'/profile'}>A</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
