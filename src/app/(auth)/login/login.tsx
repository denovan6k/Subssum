import React from 'react'
import { DemoCreateAccount } from './createaccount'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from '@/components/ui/button'
const LoginComponent = () => {
  return (
    <div>
        
        
        <header className='flex justify-between'> 
          <div className='flex space-x-2 items-center'>
           <Icon icon='weui:back-filled' className='text-[#4169E1]'/>
           <p className='text-[#4169E1]'>Home</p>
          </div>
          <Button variant='outline' className='bg-[#4169E1] w-[162px] text-white'>
              Sign up
          </Button>
        </header>
         <main className=''>
            <div className=''>
            <DemoCreateAccount/>
            </div>
        
         </main>
        
        
    
    
    
    </div>
  )
}

export default LoginComponent