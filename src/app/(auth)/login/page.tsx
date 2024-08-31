import React from 'react'
import Image from 'next/image'
import img1 from '@/app/(dash)/assets/leftsect.png'
import LoginComponent from './login'
const page = () => {
  return (
    <>
              <div className="grid grid-cols-3 ">
      <div className="col-span-1 min-h-screen">
       <Image src={img1} alt=''/>
      </div>
      <div className="col-span-2 px-[32px] pt-[32px]">
        <LoginComponent />
      </div>
    </div>

    </>
  )
}

export default page