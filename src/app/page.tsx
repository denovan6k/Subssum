"use client"
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Button } from '@/components/ui/button'
import img from '../app/(dash)/assets/ipho.png'
import Image from 'next/image'
import Header from "../app/(dash)/Header"
import { usePathname } from "next/navigation"
import Dashboard from './(dash)/dashboard/dashboard'
const DashboardMain = () => {
  const pathname = usePathname();

  const title = pathname === '/airtime' ? 'Welcome, Lawal Wahab' : 'Welcome, Lawal Wahab';
  return (
    <> 
   <Dashboard/>

    </>
  )
}

export default DashboardMain