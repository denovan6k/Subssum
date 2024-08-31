
import type { Metadata } from "next";


 import Sidebar from "../Sidebar";
import { cn } from "@/lib/utils"
import Header from "../Header";

// import { useRouter } from 'next/router';


// const routeTitles: { [key: string]: string } = {
//   '/': 'Welcome, Lawal Wahab',
//   '/airtime': 'Airtime to Cash',
//   '/payment': 'Transaction History',
//   '/support': 'Help & Support',
//   // Add more routes as needed
// };


export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // Determine if the sidebar should be shown
 
  
  // const router = useRouter();
  // const title = routeTitles[router.pathname] || 'Default Title';
  return (
           <div className="grid grid-cols-4">
          <div className="col-span-1">
            
           <Sidebar />
          </div>
          <div className="col-span-3">
           
          {children}
          </div>
         
          </div> 
        
  );
}
