"use client";
import { Avatar, Input } from '@material-tailwind/react'
import React from 'react'
import Image from 'next/image'; // Import the Image component from Next.js
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { BsArrowUpRightSquareFill, BsPersonVideo2 } from 'react-icons/bs';
import {FiSearch} from 'react-icons/fi'
import {IoNotifications} from 'react-icons/io5';
// import eng from '../Images/united-states.png';
import hin from '../Images/india.png';
function Navbar() {
  return (
    <div className='flex justify-between  md:px-8 px-2 py-3 items-center shadow-2xl sm:fixed w-full z-[999] shadow-gray-700 gap-3 bg-black'>
      <div className='w-20 mr-28 hidden sm:block'>
        <Input  icon={<FiSearch />} label='Search here...' color='blue' className='bg-white' crossOrigin={undefined} />
      </div>
        <p className='border-b border-white cursor-pointer hidden lg:block text-white'>Other Menus</p>
        <div className='flex md:gap-4  items-center'>
        <div className="relative p-3">
          <IoNotifications color="white" />
          <div className="bg-black text-white rounded-full h-6  border-2 absolute -top-2 right-0 px-1 ">2</div>
        </div>
        <div className="relative p-3">
          <BsPersonVideo2 color="white" />
          <div className="bg-black text-white rounded-full h-6  border-2 absolute -top-2 right-0 px-1">3</div>
        </div>
        <div className="relative p-3">
          <BsArrowUpRightSquareFill color="white" />
          <div className="bg-black text-white rounded-full h-6  border-2 absolute -top-2 right-0 px-1">1</div>
        </div>
        <div className="relative p-3">
          <BiSolidMessageSquareDetail color="white" />
          <div className="bg-black text-white rounded-full h-6  border-2 absolute -top-2 right-0 px-1 ">4</div>
        </div>
        </div>
        <select className='hidden md:block'>
        {/* Use the Image component to load images from the "Images" folder */}
          <option value="English">English
          </option>
          <option value="Hindi">Hindi
          </option>
        </select>
        <Avatar  src={hin.src} alt="avatar"  size='sm' />
        <div className='hidden lg:block text-white'>
          <h1>Instructor day</h1>
          <h1>Super Admin</h1>
        </div>
        <select className='hidden md:block'>
          <option value="English"></option>
        </select>
    </div>
  )
}

export default Navbar