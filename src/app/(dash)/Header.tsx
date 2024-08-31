import React from 'react'
import Link from 'next/link'
interface Props {
    title:string
}
const Header = ({title}:Props) => {
  return (
    <div>
         <header className='flex justify-between p-[32px]'>
        <h1 className='text-[20px] text-[#2B3B5A] font-semibold'> {title} </h1>
        <div className='flex items-center space-x-6'>
        <p className='text-[#4169e1] text-[16px] font-semibold'> Upgrade To Merchant </p>
        {/* circular div */}
        <div className='flex space-x-4'>
        <div className='p-[8px] rounded-full bg-[#EFF3FB] border border-[#D7E1F4]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6.29283 13.5228C6.80236 13.9087 7.47521 14.1434 8.21283 14.1434C8.95044 14.1434 9.62329 13.9087 10.1328 13.5228M2.81834 11.5369C2.51479 11.5369 2.34524 11.0847 2.52886 10.8335C2.95495 10.2506 3.3662 9.39559 3.3662 8.36602L3.38378 6.87418C3.38378 4.10242 5.54582 1.85547 8.21283 1.85547C10.9191 1.85547 13.113 4.13552 13.113 6.9481L13.0954 8.36602C13.0954 9.40266 13.4925 10.2623 13.9013 10.8455C14.0778 11.0973 13.9078 11.5369 13.608 11.5369H2.81834Z" stroke="#4169E1" strokeWidth="1.27999" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className='p-[8px] rounded-full bg-[#EFF3FB] border border-[#D7E1F4]'>
            <Link href='/profile'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.5889 4.98734C10.5889 6.71703 9.49045 7.98002 8.13543 7.98002C6.78041 7.98002 5.68195 6.71703 5.68195 4.98734C5.68195 3.25766 6.78041 1.85547 8.13543 1.85547C9.49045 1.85547 10.5889 3.25766 10.5889 4.98734Z" stroke="#4169E1" strokeWidth="1.27999" strokeLinejoin="round"/>
              <path d="M3.13594 10.4855C3.31182 10.1648 3.6346 9.96758 3.98365 9.96758H12.0159C12.365 9.96758 12.6878 10.1648 12.8636 10.4855L14.0086 12.5734C14.3902 13.2694 13.9183 14.1434 13.1609 14.1434H2.83869C2.08126 14.1434 1.60934 13.2694 1.99098 12.5734L3.13594 10.4855Z" stroke="#4169E1" strokeWidth="1.27999" strokeLinejoin="round"/>
            </svg>
            </Link>
        </div>
        </div>
        
        </div>
      </header>
    </div>
  )
}

export default Header