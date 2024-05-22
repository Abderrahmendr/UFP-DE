 
 import type { Metadata } from "next";
import {Josefin_Sans} from "next/font/google";
import "./globals.css";
import Header from './_components/Header';
import Footer from './_components/Footer';
 
 
const roboto_init = Josefin_Sans(
  { subsets: ["latin"],
    weight:['100','300'],
    variable:'--font-roboto',
  });

export const metadata: Metadata = {
  title: "UFP Deutschland",
   description: "UFP.de",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<body className={`${roboto_init.className} `}>
         <Header />
         
  
         {children}

        <Footer />
        </body>
    </html>
  );
}
