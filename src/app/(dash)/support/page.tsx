"use client"
import React from 'react'
import Helpdata from '../data/Helpdata'
import Image from 'next/image'
import Header from "../Header"
import { usePathname } from "next/navigation"
import DashBoardLayout from '../dashboard/dashboardlayout'
const Support = () => {
  const pathname = usePathname();

  const title = pathname === '/support' ? 'Help & Support' : 'Welcome, Lawal Wahab';
  return (
    <>
<DashBoardLayout>


    <Header title={title}/>
    <div className="grid grid-cols-2 gap-x-6 gap-y-6 max-w-[682px] ml-[32px] ">
       
    {Helpdata.map((item, index) => (
  <div key={index} className='max-w-[331px] rounded-2xl border-2 border-slate-300 flex gap-[14px] p-[12px]' >
    <Image src={item.image} alt=''/>
    <ul className='flex flex-col gap-[13px]'>
      <li className='text-[16px] font-semibold text-[#6882B6] '>
        {item.title}</li>  
        <li className='text-[#4169E1] text-[16px] font-medium'>
        {item.content}</li>
    </ul>
   
  </div>
))}


    </div>
    
    </DashBoardLayout>
    </>
  )
}

export default Support