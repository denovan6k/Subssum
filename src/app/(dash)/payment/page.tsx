"use client"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Input } from "@/components/ui/input"
import img1 from '../assets/yel.png'
import img2 from '../assets/gre.png'
import img3 from '../assets/red.png'
import Image from "next/image"
import { StaticImageData } from "next/image"
import Header from "../Header"
import { usePathname } from "next/navigation"
import DashBoardLayout from "../dashboard/dashboardlayout"
interface Transaction {
    img:any,
}
const transactions = [
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99997 8.00164L7.99998 11.2016M7.99997 5.62976V5.60164M1.59998 12.0016L1.59998 4.00156C1.59998 2.67608 2.67449 1.60156 3.99998 1.60156L12 1.60156C13.3255 1.60156 14.4 2.67608 14.4 4.00156L14.4 12.0016C14.4 13.3271 13.3255 14.4016 12 14.4016H3.99998C2.67449 14.4016 1.59998 13.3271 1.59998 12.0016Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
    service: "Mtn Airtime VTU",
    serviceNumber: "08085562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621960850338938178613",
    date: "6th January, 2024, 06:29PM",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10.4 6.40156L6.82022 9.60156L5.59998 8.51077M14.4 4.00156L14.4 12.0016C14.4 13.3271 13.3255 14.4016 12 14.4016H3.99998C2.67449 14.4016 1.59998 13.3271 1.59998 12.0016V4.00156C1.59998 2.67608 2.67449 1.60156 3.99998 1.60156H12C13.3255 1.60156 14.4 2.67608 14.4 4.00156Z" stroke="#2DAE32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
    service: "Airtel DATA VTU",
    serviceNumber: "07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Successful",
    paymentMethod: "Wallet",
    transactionNo: "17045621960850338938178613",
    date: "6th January, 2024, 06:29PM",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99997 8.00164L7.99998 11.2016M7.99997 5.62976V5.60164M1.59998 12.0016L1.59998 4.00156C1.59998 2.67608 2.67449 1.60156 3.99998 1.60156L12 1.60156C13.3255 1.60156 14.4 2.67608 14.4 4.00156L14.4 12.0016C14.4 13.3271 13.3255 14.4016 12 14.4016H3.99998C2.67449 14.4016 1.59998 13.3271 1.59998 12.0016Z" stroke="#EE5D50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
    service: "Startimes",
    serviceNumber: "6543654304",
    amount: "₦4000.00",
    totalAmount: "₦100.00",
    status: "Failed",
    paymentMethod: "Card Payment",
    transactionNo: "17045621960850338938178613",
    date: "6th January, 2024, 06:29PM",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99997 8.00164L7.99998 11.2016M7.99997 5.62976V5.60164M1.59998 12.0016L1.59998 4.00156C1.59998 2.67608 2.67449 1.60156 3.99998 1.60156L12 1.60156C13.3255 1.60156 14.4 2.67608 14.4 4.00156L14.4 12.0016C14.4 13.3271 13.3255 14.4016 12 14.4016H3.99998C2.67449 14.4016 1.59998 13.3271 1.59998 12.0016Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
    service: "Mtn Airtime VTU",
    serviceNumber: "08085562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621960850338938178613",
    date: "6th January, 2024, 06:29PM",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10.4 6.40156L6.82022 9.60156L5.59998 8.51077M14.4 4.00156L14.4 12.0016C14.4 13.3271 13.3255 14.4016 12 14.4016H3.99998C2.67449 14.4016 1.59998 13.3271 1.59998 12.0016V4.00156C1.59998 2.67608 2.67449 1.60156 3.99998 1.60156H12C13.3255 1.60156 14.4 2.67608 14.4 4.00156Z" stroke="#2DAE32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
    service: "Airtel DATA VTU",
    serviceNumber: "07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Successful",
    paymentMethod: "Wallet",
    transactionNo: "17045621960850338938178613",
    date: "6th January, 2024, 06:29PM",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99997 8.00164L7.99998 11.2016M7.99997 5.62976V5.60164M1.59998 12.0016L1.59998 4.00156C1.59998 2.67608 2.67449 1.60156 3.99998 1.60156L12 1.60156C13.3255 1.60156 14.4 2.67608 14.4 4.00156L14.4 12.0016C14.4 13.3271 13.3255 14.4016 12 14.4016H3.99998C2.67449 14.4016 1.59998 13.3271 1.59998 12.0016Z" stroke="#EE5D50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
    service: "Startimes",
    serviceNumber: "6543654304",
    amount: "₦4000.00",
    totalAmount: "₦100.00",
    status: "Failed",
    paymentMethod: "Card Payment",
    transactionNo: "17045621960850338938178613",
    date: "6th January, 2024, 06:29PM",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99997 8.00164L7.99998 11.2016M7.99997 5.62976V5.60164M1.59998 12.0016L1.59998 4.00156C1.59998 2.67608 2.67449 1.60156 3.99998 1.60156L12 1.60156C13.3255 1.60156 14.4 2.67608 14.4 4.00156L14.4 12.0016C14.4 13.3271 13.3255 14.4016 12 14.4016H3.99998C2.67449 14.4016 1.59998 13.3271 1.59998 12.0016Z" stroke="#FFB547" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
    service: "Mtn Airtime VTU",
    serviceNumber: "08085562949",
    amount: "₦100.00",
    totalAmount: "₦100.00",
    status: "Initiated",
    paymentMethod: "Transfer",
    transactionNo: "17045621960850338938178613",
    date: "6th January, 2024, 06:29PM",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10.4 6.40156L6.82022 9.60156L5.59998 8.51077M14.4 4.00156L14.4 12.0016C14.4 13.3271 13.3255 14.4016 12 14.4016H3.99998C2.67449 14.4016 1.59998 13.3271 1.59998 12.0016V4.00156C1.59998 2.67608 2.67449 1.60156 3.99998 1.60156H12C13.3255 1.60156 14.4 2.67608 14.4 4.00156Z" stroke="#2DAE32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
    service: "Airtel DATA VTU",
    serviceNumber: "07089075584",
    amount: "₦2000.00",
    totalAmount: "₦100.00",
    status: "Successful",
    paymentMethod: "Wallet",
    transactionNo: "17045621960850338938178613",
    date: "6th January, 2024, 06:29PM",
  },
  {
    img:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M7.99997 8.00164L7.99998 11.2016M7.99997 5.62976V5.60164M1.59998 12.0016L1.59998 4.00156C1.59998 2.67608 2.67449 1.60156 3.99998 1.60156L12 1.60156C13.3255 1.60156 14.4 2.67608 14.4 4.00156L14.4 12.0016C14.4 13.3271 13.3255 14.4016 12 14.4016H3.99998C2.67449 14.4016 1.59998 13.3271 1.59998 12.0016Z" stroke="#EE5D50" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
    service: "Startimes",
    serviceNumber: "6543654304",
    amount: "₦4000.00",
    totalAmount: "₦100.00",
    status: "Failed",
    paymentMethod: "Card Payment",
    transactionNo: "17045621960850338938178613",
    date: "6th January, 2024, 06:29PM",
  },
  // Add more transactions here to match the image
]

export default function Component() {
  const pathname = usePathname();

  const title = pathname === '/payment' ? 'Transaction History' : 'Welcome, Lawal Wahab';
  return (
    <DashBoardLayout>
<div className="">
  <Header title={title}/>
       <div className="pl-[32px] pt-[32px]">
    <div className="flex items-center relative">
                <Icon icon='fluent:filter-24-filled' className="absolute inset-2 mt-1"/>
                <Input placeholder="Filter" className="w-[190px] pl-6"/>
         </div>
         </div>
    <div className="w-full overflow-auto pt-[20px] pl-[32px] ">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Service</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Transaction No</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} className="">
              <TableCell>
                <div className=" flex space-x-4 items-center">
                   {transaction.img}
                   <div>
                   <p className="font-medium">{transaction.service}</p>
                   <p className="text-sm text-gray-500">{transaction.serviceNumber}</p>
                   </div>
                  
                </div>
              </TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>{transaction.totalAmount}</TableCell>
              <TableCell>
                <div
                 className={`px-2 py-1 rounded-full text-white font-semibold ${
                    transaction.status === "Successful"
                      ? "text-green-500"
                      : transaction.status === "Failed"
                      ? "text-red-600"
                      : transaction.status === "Initiated"
                      ? "text-yellow-500"
                      : "text-gray-500"
                  }`}
                >
                  {transaction.status}
                </div>
              </TableCell>
              <TableCell>{transaction.paymentMethod}</TableCell>
              <TableCell>
                <div>
                  <p>{transaction.transactionNo}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" className="text-[#4169E1] bg-[#EFF3FB]">
                  Open
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>
    </DashBoardLayout>
  )
}