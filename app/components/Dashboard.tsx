"use client";
import Image from 'next/image'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { BsFillPersonPlusFill, BsThreeDotsVertical } from 'react-icons/bs'
import don from '../Images/donut.png';
import { Avatar, Button } from '@material-tailwind/react';
import { AiOutlineMessage } from 'react-icons/ai';
import Cards from './Cards';
import Avatars from './Avatars';

function Dashboard() {
  return (
    <div className='flex flex-col gap-5  lg:p-10 md:p-6 sm:bg-black sm:mt-16'>
    <div className=' bg-blue-600 pb-4'>
      <div className='flex justify-between p-6 flex-shrink flex-col md:flex-row gap-5 md:gap-0'>
        <div className='flex gap-2'>
          <div className="p-2 bg-white h-8 rounded-full">
            <BiArrowBack />
          </div>
          <div className='flex flex-col items-start gap-2'>
            <h1 className='font-bold'>School November Tasks</h1>
            <p>Created by Instructor Day on Novermber 31,2022 </p>
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='flex flex-col'>
            <h1 className='font-bold'>Centered Martial Arts</h1>
            <p>Sunnyvale, Ca</p>
          </div>
          <div className='bg-white rounded-md p-2'><Image src={don} alt="donut" width="16" height="16"/></div>
          <BsThreeDotsVertical/>
        </div>
      </div>
      <div className='flex justify-between px-auto flex-wrap gap-4 '>
        <div className='flex gap-4 md:gap-2 items-center flex-col md:flex-row justify-center mx-auto '>
          <Avatars/>
          <div className='flex border-2 border-black md:p-2 cursor-pointer  bg-blue-600 items-center gap-2'>
            <BsFillPersonPlusFill/>
            <h1>Invite People</h1>
          </div>
          <div className='flex gap-5'>
            <Button size="sm">Private</Button>
            <Button size='sm'>Edit</Button>
          </div>
          <div className='flex border-2 md:p-2 items-center gap-2 '>
              <AiOutlineMessage/>
              <h1>45 comments</h1>
          </div>
        </div>
        <div className='flex gap-4 items-center cursor-pointer px-4 sm:px-0 '>
          <h1>Total Progress 60%</h1>
          <input type='range' value={60}/>
        </div>
      </div>
    </div>
    <Cards/>
    </div>
  )
}

export default Dashboard