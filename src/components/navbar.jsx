import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { GrUserWorker } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuWarehouse } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='relative w-screen mt-4'>
      <nav className="border border-gray-300 bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center rtl:space-x-reverse">
              <span className="text-4xl font-semibold dark:text-purple-700 ps-36 md:ps-6 lg:ps-10">Image</span>
          </a>

          <div className="w-full md:block md:w-4/5 " id="navbar-solid-bg">
            <ul className="flex flex-col  font-medium mt-4 rounded-lg md:gap-8 lg:gap-16 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent  ">
              <li className='flex flex-col items-center'>
                <MdOutlineDashboard className="text-gray-600 text-4xl" />
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-600 font-bold rounded" aria-current="page">Dashboard</a>
              </li>
              <li className='flex flex-col items-center'>
              <GrDocumentUser className="text-gray-600 text-4xl" />
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-600 font-bold rounded">Patient Flows</a>
              </li>
              <li className='flex flex-col items-center'>
              <GrUserWorker className="text-gray-600 text-4xl" />
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-600 font-bold rounded">Staff Flows</a>
              </li>
              <li className='flex flex-col items-center'>
              <IoSettingsOutline className="text-gray-600 text-4xl" />
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-600 font-bold rounded ">Settings</a>
              </li>
              <li className='flex flex-col items-center'>
              <LuWarehouse className="text-gray-600 text-4xl " />
                <a href="#" className="block py-2 px-3 md:p-0 text-gray-600 font-bold rounded">Admin</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
