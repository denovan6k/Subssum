"use client"
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from '@/components/ui/button'
import img from '../assets/ipho.png'
import Image from 'next/image'
import Header from "../Header"
import { usePathname } from "next/navigation"
import DashBoardLayout from './dashboardlayout'
const Dashboard = () => {
  const pathname = usePathname();

  const title = pathname === '/airtime' ? 'Welcome, Lawal Wahab' : 'Welcome, Lawal Wahab';
  return (
    <> 
    <DashBoardLayout>
    <div className='pb-[0px]'>
    <Header title={title}/>
    </div>
     
    <div className='px-[32px] flex flex-col'>
      
   
      <main className='grid grid-cols-2 max-w-[1000px]'>
        <div className='flex flex-col max-w-[463px] gap-[20px]'>

          <div className='p-[24px] flex justify-between border-2 rounded-xl border-slate-300 items-center'>
          <ul className='flex flex-col'>
            <li className='text-[16px] text-[#3C517C]'>
                  Wallet Balance
            </li>
            <li className='text-[36px] font-semibold text-[#3C517C] '>
            ₦3000
            </li>
          </ul>

          <Button variant='default' className='bg-[#4169E1] w-[194px] text-white'>Fund Wallet</Button>
           
          </div>



          <div className='p-[24px] flex flex-col rounded-2xl border-2 border-slate-300'>
            <div className='flex flex-col gap-[4px]'>
            <h1> Referral</h1>
            <p className='text-[#3C517C]'> Referral Code: <span className='text-[#3C517C] font-bold'> 18/52ha089 </span></p>
            </div>
           
             <ul className='flex items-center gap-[16px] mt-[16px] text-[#4169E1]'>
              <li className='flex items-center space-x-2'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5.99997 14.3996L3.59997 14.3996C2.93723 14.3996 2.39997 13.8624 2.39997 13.1996L2.39997 4.39961C2.39997 3.29504 3.29541 2.39961 4.39997 2.39961L13.2 2.39961C13.8627 2.39961 14.4 2.93687 14.4 3.59961L14.4 5.99961M12 21.5996L19.2 21.5996C20.5255 21.5996 21.6 20.5251 21.6 19.1996L21.6 11.9996C21.6 10.6741 20.5255 9.59961 19.2 9.59961L12 9.59961C10.6745 9.59961 9.59997 10.6741 9.59997 11.9996L9.59997 19.1996C9.59997 20.5251 10.6745 21.5996 12 21.5996Z" stroke="#4169E1" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
                <p> Copy</p>
              </li>
              <li className='flex items-center  space-x-2' >

                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13.8 19.5524H19.8M4.20001 19.5524L8.566 18.6727C8.79777 18.626 9.01059 18.5119 9.17773 18.3446L18.9514 8.56559C19.42 8.09674 19.4197 7.33675 18.9507 6.86829L16.8803 4.80021C16.4115 4.33194 15.6519 4.33226 15.1835 4.80092L5.40877 14.581C5.24196 14.7479 5.12806 14.9603 5.08132 15.1916L4.20001 19.5524Z" stroke="#4169E1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
              <p> Edit</p>
              </li>
              <li className='flex items-center space-x-2'>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M21.0001 11.4586L11.4001 5.09961L11.4001 8.69961C2.99988 10.4996 2.99988 18.8996 2.99988 18.8996C2.99988 18.8996 6.59988 14.0996 11.4001 14.6996L11.4001 18.4196L21.0001 11.4586Z" stroke="#4169E1" stroke-width="1.5" stroke-linejoin="round"/>
                </svg>
              <p> share </p>
              </li>
             </ul>

          </div>


          <div className='p-[24px] flex justify-between rounded-2xl border-2 border-slate-300'>
            <ul className='flex flex-col'>
              <li className='text-[16px] font-normal'> Total referrals made </li>
              <li className='text-[24px] font-medium text-[#3C517C]'> 0 </li>
              <li className='flex items-center space-x-2 text-[#4169E1] mt-[16px]'>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M21.6 16.5606L21.6 17.3106C22.0142 17.3106 22.35 16.9748 22.35 16.5606H21.6ZM21.6 11.2806H22.35C22.35 10.8664 22.0142 10.5306 21.6 10.5306V11.2806ZM7.27446 6.32974C6.92603 6.55373 6.82515 7.01777 7.04914 7.36619C7.27313 7.71462 7.73716 7.8155 8.08559 7.59151L7.27446 6.32974ZM14.4 2.64062L14.992 2.18017C14.7537 1.87376 14.321 1.79983 13.9945 2.00974L14.4 2.64062ZM17.168 7.42108C17.4223 7.74804 17.8935 7.80694 18.2205 7.55264C18.5474 7.29834 18.6063 6.82713 18.352 6.50017L17.168 7.42108ZM21.6 15.8106H18.48L18.48 17.3106H21.6L21.6 15.8106ZM18.48 12.0306H21.6V10.5306L18.48 10.5306V12.0306ZM20.85 11.2806V16.5606H22.35V11.2806H20.85ZM16.59 13.9206C16.59 12.8768 17.4362 12.0306 18.48 12.0306V10.5306C16.6078 10.5306 15.09 12.0484 15.09 13.9206H16.59ZM18.48 15.8106C17.4362 15.8106 16.59 14.9644 16.59 13.9206H15.09C15.09 15.7929 16.6078 17.3106 18.48 17.3106L18.48 15.8106ZM8.08559 7.59151L14.8056 3.27151L13.9945 2.00974L7.27446 6.32974L8.08559 7.59151ZM13.808 3.10108L17.168 7.42108L18.352 6.50017L14.992 2.18017L13.808 3.10108ZM3.36002 7.71063L19.68 7.71063V6.21063L3.36002 6.21063L3.36002 7.71063ZM19.68 20.6106L3.36002 20.6106V22.1106L19.68 22.1106V20.6106ZM3.15002 20.4006L3.15002 7.92063H1.65002L1.65002 20.4006H3.15002ZM3.36002 20.6106C3.24405 20.6106 3.15002 20.5166 3.15002 20.4006H1.65002C1.65002 21.345 2.41562 22.1106 3.36002 22.1106V20.6106ZM19.89 20.4006C19.89 20.5166 19.796 20.6106 19.68 20.6106V22.1106C20.6244 22.1106 21.39 21.345 21.39 20.4006H19.89ZM19.68 7.71063C19.796 7.71063 19.89 7.80465 19.89 7.92063L21.39 7.92063C21.39 6.97622 20.6244 6.21063 19.68 6.21063V7.71063ZM3.36002 6.21063C2.41562 6.21063 1.65002 6.97622 1.65002 7.92063H3.15002C3.15002 7.80465 3.24404 7.71063 3.36002 7.71063L3.36002 6.21063ZM19.89 17.2806V20.4006H21.39V17.2806H19.89ZM19.89 7.92063V10.4406L21.39 10.4406V7.92063L19.89 7.92063Z" fill="#4169E1"/>
</svg>
                <p> Cashout </p>
             </li> 
                
            </ul>
            <ul className='flex flex-col text-[#3C517C]'>
              <li className='text-[16px]'>Current wallet Bonus</li>
              <li className='text-[24px] font-semibold'>₦0.00 </li>

            </ul>
          </div>
            

        </div>

        <div>
         <Image src={img} alt=''/>
        </div>

      </main>


    </div>
    </DashBoardLayout>
    </>
  )
}

export default Dashboard