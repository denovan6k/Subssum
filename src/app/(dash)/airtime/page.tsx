'use client'
import * as React from "react"

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Header from "../Header"
import { usePathname } from "next/navigation"
import DashBoardLayout from "../dashboard/dashboardlayout"
export default function CardWithForm() {


  const pathname = usePathname();

  const title = pathname === '/airtime' ? 'Airtime to cash' : 'Welcome, Lawal Wahab';
  return (
    <DashBoardLayout>
<div>
  <Header title={title}/>
        <div className="flex flex-col justify-center items-center mt-[34px]">
          <div className="flex text-[12px] gap-[8px]"> 
            <div className="flex flex-col ">
              <p className="text-[#4169E1] text-center">Fill info</p>
              <div className="w-[160px] h-[7px] rounded-full bg-[#4169E1]"></div>
            </div>
            <div className="flex flex-col">
            <p className="text-[#D7E1F4] opacity-70 text-center">Make payment</p>
            <div className="w-[160px] h-[7px] rounded-full bg-[#D7E1F4]"></div>
            </div>
            <div className="flex flex-col ">
            <p className="text-[#D7E1F4] opacity-70 text-center">Verified reciepts</p>
            <div className="w-[160px] h-[7px] rounded-full bg-[#D7E1F4]"></div>
            </div>
          </div>
                <Card className="w-[500px] flex flex-col mt-[54px]">
                  <CardHeader>
                    <CardTitle className="text-center">Airtime to Cash</CardTitle>
                    
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div className="grid w-full items-center gap-4">

                        <div className='flex gap-[20px]'>

                        <div className="flex flex-col space-y-1.5 w-[220px]">
                          <Label htmlFor="framework">Select Network</Label>
                          <Select>
                            <SelectTrigger id="framework">
                              <SelectValue placeholder="9mobile" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                              <SelectItem value="next">Airtel</SelectItem>
                              <SelectItem value="sveltekit">MTN</SelectItem>
                              <SelectItem value="astro">Glo</SelectItem>
                              <SelectItem value="nuxt">Spectranet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="flex flex-col space-y-1.5 max-w-[220px]">
                          <Label htmlFor="name">Phone Number</Label>
                          <Input id="name" placeholder="08094562627" />
                        </div>

                      


                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Amount</Label>
                          <Input id="name" placeholder="₦5,000" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Airtime Share Pin</Label>
                          <Input id="name" placeholder="3546576433" />
                        </div>

                        

                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    
                    <Button className="w-full bg-[#4169E1]">Proceed</Button>
                  </CardFooter>
                </Card>
        </div>
        </div>
        </DashBoardLayout>
  )
}
