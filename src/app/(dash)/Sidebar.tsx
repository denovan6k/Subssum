'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import data from './data/Sidebardata'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import img from './assets/subicon.png'
import img1 from './assets/Networks.png'
import img2 from './assets/airtel.png'
import img3 from './assets/9mobile.png'
import img4 from './assets/Icons.png'

  type Checked = DropdownMenuCheckboxItemProps["checked"]

const Sidebar = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
    const [isVisible, setIsVisible] = useState(false);

    // Toggle the visibility when the button is clicked
    const handleClick = () => {
      setIsVisible(!isVisible);
    };

  return (
    <>
    <div className='pl-[32px] pr-[42px] flex flex-col pt-[32px] bg-[#EFF3FB] h-full gap-[10px] '>
      <div className='flex items-center space-x-2'>
        <Image src={img} alt=''/>
        <p className='text-[32px] font-bold'>
            subssum
        </p>
         </div>

          {/* dashboard div width */}
         <div className='flex flex-col max-w-[230px]'>
            
            
            



          
                <div className='flex flex-col gap-[16px] '>
                <div className='flex items-center space-x-2 text-[16px]'>
                  <Button variant="secondary" 
                                    className='flex justify-start items-center pr-[23px] pl-[10px] py-[10px] text-[#4C689E] bg-[#EFF3FB] hover:bg-[#4169E1] hover:text-white w-full' asChild>
                  <Link href='/' >
                  <Icon icon="material-symbols:dashboard" className='text-[24px]'/>

                  <p className='ml-[20px]'> Dashboard </p>
                  </Link>                  
                   </Button>
                
                            
                </div>
                                {data.map((item, index) => (
                                    <DropdownMenu key={index}>
                                    <DropdownMenuTrigger asChild>
                                        
                                    <Button variant="secondary" 
                                    className='flex justify-start items-center pr-[23px] pl-[10px] py-[10px] text-[#4C689E] bg-[#EFF3FB] hover:bg-[#4169E1] hover:text-white' asChild>
                                        <Link href={item.title} > 
                                        <Icon icon={item.icon} className='text-[24px]'/>
                                        
                                      <span className='ml-[20px]'>{item.title} </span>  
                                        </Link>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="">
                                    <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem
                                        checked={showStatusBar}
                                        onCheckedChange={setShowStatusBar}
                                    >
                                        {item.title}
                                    </DropdownMenuCheckboxItem>
                        
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                    
                                ))}
                                <Button variant="secondary" onClick={handleClick} className='justify-start flex space-x-2 pr-[23px] pl-[10px] items-center text-[#4C689E] bg-[#EFF3FB] hover:bg-[#4169E1] hover:text-white' asChild>
                                   <Link href='/airtime'> <Icon icon='tdesign:refresh' className='text-[24px] mr-2 '/>
                                <p className='ml-[15px]'>Airtime to cash</p> 
                                </Link>
                                </Button>
                                {isVisible && <div className='flex justify-between items-center'>
                                    <Image src={img1} alt=''/>
                                    <Image src={img2} alt=''/>
                                    <Image src={img3} alt=''/>
                                    
                                    <p>more</p>
                                    
                                    <Icon icon='weui:arrow-filled'/>
                                        
                                    
                                    </div>}
                                <div className='flex flex-col gap-[16px]'>
                                <Button asChild className='justify-start text-[#4C689E] bg-[#EFF3FB] hover:bg-[#4169E1] hover:text-white' variant='secondary'>   
                                <Link href='payment' className='flex  pr-[23px] pl-[10px] items-center '>
                                        <Icon icon='akar-icons:reciept' className='text-[24px]'/>
                                <p className='ml-[15px]'>Transaction history</p>
                              
                                </Link>
                                </Button>
                                <Button asChild className='justify-start text-[#4C689E] bg-[#EFF3FB] hover:bg-[#4169E1] hover:text-white' variant='secondary'>
                                <Link href='/support' className='flex space-x-4  pr-[23px] pl-[10px] items-center '>
                                    <Icon icon='wpf:headset' className='text-[24px]'/>
                                    <p className='ml-[15px]'> Help & Support </p>
                                </Link>
                                </Button>


                                <Button asChild className='justify-start text-[#4C689E] bg-[#EFF3FB] my-[100px] hover:bg-[#4169E1] hover:text-white' variant='secondary'>
                                <Link href='' className='flex space-x-4 pr-[23px] pl-[10px] items-center '>
                                <Icon icon='ic:twotone-logout' className='text-[24px]'/>
                                <p>Logout</p>
                                </Link>
                                </Button>
                        
                                </div>
                   
                 </div>
               

         </div>




    </div>
    
    
    </>
  )
}

export default Sidebar