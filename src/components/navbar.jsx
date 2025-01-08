import React from 'react';
import { MdOutlineDashboard } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { GrUserWorker } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuWarehouse } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='relative w-screen mt-4'>
      

<nav className="border-gray-200 bg-white dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-purple-700">Image</span>
    </a>

    <div className="hidden w-full md:block md:w-2/3" id="navbar-solid-bg">
      <ul className="flex flex-col  font-medium mt-4 rounded-lg md:space-x-32 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent  ">
        <li className='flex flex-col items-center'>
          <MdOutlineDashboard className="text-gray-700 text-3xl" />
          <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-gray-700 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Dashboard</a>
        </li>
        <li className='flex flex-col items-center'>
        <GrDocumentUser className="text-gray-700 text-3xl" />
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded md:border-0 md:dark:text-gray-700 dark:text-white whitespace-nowrap">Patient Flows</a>
        </li>
        <li className='flex flex-col items-center'>
        <GrUserWorker className="text-gray-700 text-3xl" />
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded md:border-0 md:dark:text-gray-700 dark:text-white whitespace-nowrap">Staff Flows</a>
        </li>
        <li className='flex flex-col items-center'>
        <IoSettingsOutline className="text-gray-700 text-3xl" />
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded md:border-0 md:dark:text-gray-700 dark:text-white">Settings</a>
        </li>
        <li className='flex flex-col items-center'>
        <LuWarehouse className="text-gray-700 text-3xl" />
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded md:border-0 md:dark:text-gray-700 dark:text-white">Admin</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar;
