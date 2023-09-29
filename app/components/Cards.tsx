import React from 'react'
import { AiFillPlusSquare } from 'react-icons/ai'
import { BsDot, BsThreeDots } from 'react-icons/bs'
import Avatars from './Avatars'
import { BiTimeFive } from 'react-icons/bi'

function Cards() {
    const data=[
    {
        title:"list",
        name:"important",
        desc:"Create sign up sheet for holidy student/parent conferences",
        value:40,
    },
    {
        title:"list",
        name:"Instructor Meeting",
        desc:"Create sign up sheet for holidy student/parent conferences",
        value:20,
    },
    {
        title:"list",
        name:"Database",
        desc:"Create sign up sheet for holidy student/parent conferences",
        value:30,
    },
    {
        title:"progress",
        name:"Video",
        desc:"Create sign up sheet for holidy student/parent conferences",
        value:80,
    },
    {
        title:"progress",
        name:"BUGS FIXING",
        desc:"Create sign up sheet for holidy student/parent conferences",
        value:90,
    },
    {
        title:"done",
        name:"BUGS FIXING",
        desc:"Create sign up sheet for holidy student/parent conferences",
        value:100,
    },
    {
        title:"done",
        name:"Database",
        desc:"Create sign up sheet for holidy student/parent conferences",
        value:100,
    },
    {
        title:"done",
        name:"Instructor Meeting",
        desc:"Create sign up sheet for holidy student/parent conferences",
        value:100,
    },
    ]
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2  gap-5 ">
        <div className=' flex flex-col gap-6 py-2 border-2 '>
        <div className='flex justify-between items-center px-4'>
            <h1 className='font-bold text-lg sm:text-white'>To-Do List(24)</h1>
            <AiFillPlusSquare size={30} color="purple"/>
        </div>
        {data.map((item:{title:string,name:string,desc:string,value:number})=>(
            <div key={item.title} className='text-white'>
                {item.title==="list" && <div className='flex shadow-xl flex-col gap-3 p-4 bg-deep-purple-600'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <BsDot color="yellow" size={30}/>   
                            <h1 className='text-white'>{item.name}</h1>
                        </div>
                        <BsThreeDots className="cursor-pointer" size="20"/>
                    </div>
                    <p className='text-white'>{item.desc}</p>
                    <input type="range" value={item.value}/>
                    <div className='flex justify-between items-center gap-8 flex-wrap'>
                        <Avatars/>
                        <div className='flex gap-2 items-center'><BiTimeFive/>Due in 4 days</div>
                    </div>
                </div>}
            </div>
        ))}
        </div>
        <div className=' flex flex-col gap-1 py-2 border-2'>
        <div className='flex justify-between items-center px-4'>
            <h1 className='font-bold text-lg sm:text-white'>In Progress</h1>
            <AiFillPlusSquare size={30} color="purple"/>
        </div>
        {data.map((item:{title:string,name:string,desc:string,value:number})=>(
            <div key={item.title}>
                {item.title==="progress" && <div className='text-white flex shadow-xl flex-col gap-3 p-4 bg-deep-purple-600'>
                    <div className='flex justify-between items-center flex-shrink '>
                        <div className='flex gap-2 items-center'>
                            <BsDot color="yellow" size={30}/>   
                            <h1 className='text-white'>{item.name}</h1>
                        </div>
                        <BsThreeDots className="cursor-pointer" size="20"/>
                    </div>
                    <p className='text-white'>{item.desc}</p>
                    <input type="range" value={item.value}/>
                    <div className='flex justify-between items-center gap-8 flex-wrap'>
                        <Avatars/>
                        <div className='flex gap-2 items-center'><BiTimeFive/>Due in 4 days</div>
                    </div>
                </div>}
            </div>
        ))}
        </div>
        <div className=' flex flex-col gap-1 py-2 border-2'>
        <div className='flex justify-between items-center px-4'>
            <h1 className='font-bold text-lg sm:text-white'>Done</h1>
            <AiFillPlusSquare color="purple" size={30}/>
        </div>
        {data.map((item:{title:string,name:string,desc:string,value:number})=>(
            <div key={item.title}>
                {item.title==="done" && <div className='flex shadow-xl flex-col gap-3 p-4 bg-deep-purple-600'>
                    <div className='flex justify-between items-center flex-shrink '>
                        <div className='flex gap-2 items-center'>
                            <BsDot color="yellow" size={30}/>   
                            <h1 className='text-white'>{item.name}</h1>
                        </div>
                        <BsThreeDots className="cursor-pointer" size="20"/>
                    </div>
                    <p className='text-white'>{item.desc}</p>
                    <input type="range" value={item.value}/>
                    <div className='flex justify-between items-center gap-8 flex-wrap'>
                        <Avatars/>
                        <div className='flex gap-2 items-center'><BiTimeFive/>Due in 4 days</div>
                    </div>
                </div>}
            </div>
        ))}
        </div>
        <div className=' flex flex-col gap-4 py-2 border-2'>
            <div className='flex justify-between items-center px-4'>
                <h1 className='font-bold text-lg sm:text-white'>Revised(0)</h1>
                <AiFillPlusSquare color="purple" size={30}/>
            </div>
            <div className='bg-purple-500 p-2'>
                <div className='border-dotted border-white border-2  bg-black'>
                    <h1 className='text-white text-center py-2'>Move Card here</h1>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cards