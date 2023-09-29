"use client";
import React, { useState } from 'react';
import { AiOutlineDashboard, AiOutlineWechat,AiOutlineMenu,AiTwotoneShop } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { PiCirclesFourFill } from 'react-icons/pi';
import { BiSolidContact } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';
import { BsBookHalf } from 'react-icons/bs';
import { TbFileInvoice } from 'react-icons/tb';
import { IoMdSettings } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
} from '@material-tailwind/react';

interface SidebarProps {
  // Add any props you might need here
}

function Sidebar(props: SidebarProps) {
  // const [openAlert, setOpenAlert] = useState<boolean>(false);

//  const handleOpen=()=>{
//   setOpenAlert(!openAlert);
//  }

  return (
    <div className="w-fit " >
      {/* <Card className={`w-fit sm:p-4 p-2 shadow-2xl hidden lg:block ${openAlert? '' : 'hidden'}`} > */}
      <Card className={`w-fit sm:p-4 p-2 rounded-none shadow-2xl shadow-gray-50 hidden lg:block bg-black first-letter`} >
      <div className="mb-2 flex items-center justify-between p-2">
        <Typography variant="h5" color="white">
          weframetech
        </Typography>
        <AiOutlineMenu  className="cursor-pointer" color="white"/>
      </div>
      <List className='pt-5'>
          <Typography color='white'>MAIN MENU</Typography>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
              <ListItemPrefix>
                <AiOutlineDashboard className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
          </ListItem>
          <ListItem>
          <ListItemPrefix>
            <MdEmail className="h-5 w-5" />
          </ListItemPrefix>
          Email
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue" className="rounded-full bg-white" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <AiOutlineWechat className="h-5 w-5" />
          </ListItemPrefix>
          Chat
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PiCirclesFourFill className="h-5 w-5" />
          </ListItemPrefix>
          Kanban
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BiSolidContact className="h-5 w-5" />
          </ListItemPrefix>
          Contact
          <ListItemSuffix>
            <Chip value="NEW" size="sm" variant="ghost" color="blue-gray" className="rounded-full bg-pink-400" />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <SlCalender className="h-5 w-5" />
          </ListItemPrefix>
          Calender
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BsBookHalf className="h-5 w-5" />
          </ListItemPrefix>
          Courses
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <AiTwotoneShop className="h-5 w-5" />
          </ListItemPrefix>
          Shop
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <TbFileInvoice className="h-5 w-5" />
          </ListItemPrefix>
          Invoices
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <IoMdSettings className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
      </List>
      <Alert className="mt-auto" color='blue'>
        <TbFileInvoice className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Increase your
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
           work with kanban
        </Typography>
        <GoArrowRight/>
        
      </Alert>
    </Card>
    <Card className={`w-fit p-2 shadow-2xl lg:hidden block bg-black rounded-none`} style={{"width":"76px",}}>
      <div className="mb-2  px-4 p-2">
        <AiOutlineMenu color="white" className="cursor-pointer"/>
      </div>
      <List className=''>
          <ListItem  >
              <ListItemPrefix>
                <AiOutlineDashboard className="h-5 w-5" />
              </ListItemPrefix>
          </ListItem>
          <ListItem>
          <ListItemPrefix>
            <MdEmail className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <AiOutlineWechat className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PiCirclesFourFill className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BiSolidContact className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <SlCalender className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <BsBookHalf className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <AiTwotoneShop className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <TbFileInvoice className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <IoMdSettings className="h-5 w-5" />
          </ListItemPrefix>
        </ListItem>
      </List>
    </Card>
    </div>
    
  );
}
export default Sidebar;
