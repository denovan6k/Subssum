
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
 import Sidebar from "./(dash)/Sidebar";
import { cn } from "@/lib/utils"
import Header from "./(dash)/Header";

// import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
// const routeTitles: { [key: string]: string } = {
//   '/': 'Welcome, Lawal Wahab',
//   '/airtime': 'Airtime to Cash',
//   '/payment': 'Transaction History',
//   '/support': 'Help & Support',
//   // Add more routes as needed
// };

export const metadata: Metadata = {
  title: "subssum",
  description: "Innovation is our mission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // Determine if the sidebar should be shown
 
  
  // const router = useRouter();
  // const title = routeTitles[router.pathname] || 'Default Title';
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
          
       
           
          {children}
         
          
        
        
        </body>
    </html>
  );
}
