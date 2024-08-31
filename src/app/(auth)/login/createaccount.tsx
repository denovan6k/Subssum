"use client"
import { Icon } from "@iconify/react/dist/iconify.js"

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


import { Switch } from "@/components/ui/switch"

export function DemoCreateAccount() {
  return (
    <div className="flex justify-center">
                <Card className="w-[500px] border-0 flex flex-col">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl text-center text-[#4C689E]">Login</CardTitle>
                    {/* <CardDescription>
                    Enter your email below to create your account
                    </CardDescription> */}
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="">
                    
                    <Button variant="outline" className="w-full drop-shadow-sm shadow-blue">
                        <Icon icon='flat-color-icons:google' className="mr-2 h-4 w-4" />
                        <span className="text-[#4C689E]"> Login with Google</span>
                    </Button>
                    </div>
                    <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                        </span>
                    </div>
                    </div>
                    </CardContent>
                    <div className="p-[20px] w-[500px] rounded-xl border border-[#D7E1F4]">
                    <CardContent className="grid gap-4 w-full">
                    <div className="grid gap-2 text-[#4C689E]">
                    <Label htmlFor="email" className="text-[12px]">Email Address</Label>
                    <Input id="email" type="email" placeholder="wabdotmail@gmail.com" />
                    </div>
                    <div className="grid gap-2 text-[#4C689E]">
                    <Label htmlFor="password" className="text-[12px]">Password</Label>
                    <Input id="password" type="password"  placeholder="********"/>
                    </div>
                    <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode " className="text-[#4C689E]">Remember me</Label>
                </div>
                <p className="text-[#EE5D50] font-medium">Recover password</p>
                </div>

                </CardContent>
                
                
                <CardFooter>
                    <Button className="w-full bg-[#4169E1]">Login</Button>
                </CardFooter>
                </div>
                </Card>
                </div>     
  )
}