'use client'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import DashBoardLayout from '../dashboard/dashboardlayout'

import { Switch } from "@/components/ui/switch"
const Profile = () => {
  return (
    <>
<DashBoardLayout>

            <div className='grid grid-cols-2 max-w-[900px] gap-[10px]'>
                <div className='grid grid-rows-2 max-w-[416px] gap-[16px]'>
                    <div className='flex flex-col justify-center items-center gap-[18px] p-[24px] border  rounded-2xl '>
                       <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.6468 99.9999H17.235C7.75557 99.9999 0.00012207 92.2445 0.00012207 82.7651V43.6309C11.6245 44.5084 26.5984 51.5658 53.9622 67.1482C53.9622 67.1482 48.8543 86.762 44.6468 99.9999Z" fill="#CDECFE"/>
                            <path d="M25.2248 32.7544C29.5235 32.7544 33.0083 29.2696 33.0083 24.9709C33.0083 20.6723 29.5235 17.1875 25.2248 17.1875C20.9262 17.1875 17.4414 20.6723 17.4414 24.9709C17.4414 29.2696 20.9262 32.7544 25.2248 32.7544Z" fill="#258AFF"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M99.9999 49.5222V82.7639C99.9999 92.2429 92.2444 99.9988 82.765 99.9988H17.235C7.75557 99.9988 0.00012207 92.2434 0.00012207 82.7639V76.873C58.7967 46.3882 55.9617 27.9443 99.9994 49.5222H99.9999Z" fill="url(#paint0_linear_373_1766)"/>
                            <defs>
                                <linearGradient id="paint0_linear_373_1766" x1="72.5471" y1="98.8388" x2="57.9472" y2="42.6157" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#007BFF"/>
                                <stop offset="1" stop-color="#599EFF"/>
                                </linearGradient>
                            </defs>
                            </svg>

                            <ul className='flex gap-2 items-center'>
                                <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M6 5.09922V5.84922C6.26675 5.84922 6.51343 5.70754 6.64783 5.47712L6 5.09922ZM7.4 2.69922V1.94922C7.13325 1.94922 6.88657 2.0909 6.75216 2.32132L7.4 2.69922ZM12.6 2.69922L13.2478 2.32132C13.1134 2.0909 12.8667 1.94922 12.6 1.94922V2.69922ZM14 5.09922L13.3522 5.47712C13.4866 5.70754 13.7332 5.84922 14 5.84922V5.09922ZM2.75 15.2992V7.09922H1.25V15.2992H2.75ZM4 5.84922H6V4.34922H4V5.84922ZM6.64783 5.47712L8.04783 3.07712L6.75216 2.32132L5.35217 4.72132L6.64783 5.47712ZM7.4 3.44922H12.6V1.94922H7.4V3.44922ZM11.9522 3.07712L13.3522 5.47712L14.6478 4.72132L13.2478 2.32132L11.9522 3.07712ZM14 5.84922H16V4.34922H14V5.84922ZM17.25 7.09922V15.2992H18.75V7.09922H17.25ZM17.25 15.2992C17.25 15.9896 16.6904 16.5492 16 16.5492V18.0492C17.5188 18.0492 18.75 16.818 18.75 15.2992H17.25ZM16 5.84922C16.6904 5.84922 17.25 6.40886 17.25 7.09922H18.75C18.75 5.58044 17.5188 4.34922 16 4.34922V5.84922ZM2.75 7.09922C2.75 6.40886 3.30964 5.84922 4 5.84922V4.34922C2.48122 4.34922 1.25 5.58043 1.25 7.09922H2.75ZM4 16.5492C3.30964 16.5492 2.75 15.9896 2.75 15.2992H1.25C1.25 16.818 2.48122 18.0492 4 18.0492V16.5492ZM12.25 10.6992C12.25 11.9419 11.2426 12.9492 10 12.9492V14.4492C12.0711 14.4492 13.75 12.7703 13.75 10.6992H12.25ZM10 12.9492C8.75736 12.9492 7.75 11.9419 7.75 10.6992H6.25C6.25 12.7703 7.92893 14.4492 10 14.4492V12.9492ZM7.75 10.6992C7.75 9.45658 8.75736 8.44922 10 8.44922V6.94922C7.92893 6.94922 6.25 8.62815 6.25 10.6992H7.75ZM10 8.44922C11.2426 8.44922 12.25 9.45658 12.25 10.6992H13.75C13.75 8.62815 12.0711 6.94922 10 6.94922V8.44922ZM16 16.5492H4V18.0492H16V16.5492Z" fill="#4169E1"/>
                            </svg>
                                </li>
                                <li className='text-[#4169E1]'>
                                    Upload an image
                                </li>
                            </ul>

                    </div>
{/* second div */}

                    <div className='flex flex-col p-[24px] gap-[16px] rounded-2xl border text-[#4C689E]'>
                        <div className='flex justify-between'>
                            <h1>Name</h1>
                            <p className='font-semibold' > Lawal Wahab Babatunde </p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Email</h1>
                            <p className='font-semibold' > wabdotmail@gmail.com</p>
                        </div><div className='flex justify-between'>
                            <h1> Phone Number</h1>
                            <p className='font-semibold' > 0906 856 2949</p>
                        </div><div className='flex justify-between'>
                            <h1 className=''>Account Status</h1>
                            <p className='font-semibold text-[#2DAE32]' > Active</p>
                        </div><div className='flex justify-between'>
                            <h1>Referral link</h1>
                            <ul className='flex flex-col'>
                                <li className='font-semibold' > www.subsum.com/tre/wd... </li>
                                <li className='flex space-x-2 justify-end'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.99997 14.3996L3.59997 14.3996C2.93723 14.3996 2.39997 13.8624 2.39997 13.1996L2.39997 4.39961C2.39997 3.29504 3.29541 2.39961 4.39997 2.39961L13.2 2.39961C13.8627 2.39961 14.4 2.93687 14.4 3.59961L14.4 5.99961M12 21.5996L19.2 21.5996C20.5255 21.5996 21.6 20.5251 21.6 19.1996L21.6 11.9996C21.6 10.6741 20.5255 9.59961 19.2 9.59961L12 9.59961C10.6745 9.59961 9.59997 10.6741 9.59997 11.9996L9.59997 19.1996C9.59997 20.5251 10.6745 21.5996 12 21.5996Z" stroke="#4169E1" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                    <p className='text-[#4169E1]'> Copy</p>
                                </li>
                            </ul>
                        </div>
                       
                        
                        <div className='text-[#4169E1]'>Edit details</div>

                    </div>

                </div>
{/* second div */}

                <div className='flex flex-col gap-[12px] max-w-[500px]'>

                    <div className='p-[8px] justify-center flex space-x-[8px] rounded-full border'>
                        <Button className='px-[40px] py-[16px] bg-[#EFF5FB] rounded-full text-[#3C517C]'>Change Password </Button>
                        <Button className='px-[62px] py-[16px] bg-[#EFF5FB] opacity-50 rounded-full text-[#A9BADA]'> Change Pin </Button>

                    </div>


                    <div>

 <Card className="w-[500px] border-0 flex flex-col">
                {/* <CardHeader className="space-y-1"> */}
                    {/* <CardTitle className="text-2xl text-center text-[#4C689E]">Login</CardTitle> */}
                    {/* <CardDescription>
                    Enter your email below to create your account
                    </CardDescription> */}
                {/* </CardHeader> */}
              
                    <div className="p-[20px]  rounded-xl border border-[#D7E1F4]">
                    <CardContent className="grid gap-4 w-full">
                    <div className="grid gap-2 text-[#4C689E]">
                    <Label htmlFor="email" className="text-[12px]">Current Password</Label>
                    <Input id="email" type="email" placeholder="Enter Current Password" />
                    </div>
                    <div className="grid gap-2 text-[#4C689E]">
                    <Label htmlFor="password" className="text-[12px]"> New Password</Label>
                    <Input id="password" type="password"  placeholder="Enter New Password"/>
                    </div>
                    <div className="grid gap-2 text-[#4C689E]">
                    <Label htmlFor="password" className="text-[12px]"> Confirm New Password</Label>
                    <Input id="password" type="password"  placeholder="Enter New Password"/>
                    </div>
                  

                </CardContent>
                
                
                <CardFooter>
                    <Button className="w-full bg-[#4169E1] text-white">Submit</Button>
                </CardFooter>
                </div>
                </Card>
                    </div>



                </div>

                
            </div>
    
            </DashBoardLayout>
    
    </>
  )
}

export default Profile