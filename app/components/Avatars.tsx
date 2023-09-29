import { Avatar } from '@material-tailwind/react'
import React from 'react'
import hin from '../Images/india.png';

function Avatars() {
  return (
    <div className="flex items-center -space-x-4">
            <Avatar
                size='sm'
              variant="circular"
              alt="user 1"
              className="border-2 border-gray-600 cursor-pointer bg-blue-gray-400 hover:z-10 focus:z-10"
              src={hin.src}
            />
            <Avatar
            size='sm'
              variant="circular"
              alt="user 2"
              className="border-2 border-gray-600 cursor-pointer bg-blue-gray-400 hover:z-10 focus:z-10"
              src={hin.src}
            />
            <Avatar
            size='sm'
              variant="circular"
              alt="user 3"
              className="border-2 border-gray-600 cursor-pointer bg-blue-gray-400 hover:z-10 focus:z-10"
              src={hin.src}
            />
            <Avatar
            size='sm'
              variant="circular"
              alt="user 4"
              className="border-2 border-gray-600 cursor-pointer bg-blue-gray-400 hover:z-10 focus:z-10"
              src={hin.src}
            />
            <Avatar
            size='sm'
              variant="circular"
              alt="+5"
              className="border-2 border-gray-600 cursor-pointer bg-blue-gray-400 font-bold text-white pt-2 hover:z-10 focus:z-10"
            />
          </div>
  )
}

export default Avatars