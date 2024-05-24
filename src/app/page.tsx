import Image from "next/image";
import Dots from '@/app/_components/dots'
import Social_media from "@/app/_components/social_media"
import ScrollTopButton from "@/app/_components/scrollTopButton"
import Products from "@/app/Products/products"
import Suppliers from "@/app/suppliers/suppliers"
import  Engagement  from "@/app/engagement/engagement";
   export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-7  ">
    <Dots/>
    <ScrollTopButton/>
    <Social_media/>
    <Products/>   
    <Suppliers/> 
    <Engagement/>
     

     </main>
  );
}
