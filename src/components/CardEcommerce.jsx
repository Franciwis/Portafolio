'use client'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdFindInPage } from "react-icons/md";

const CardEcommerce = () => {
  return (
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className='flex flex-col w-full h-screen justify-center items-center px-28
         gap-10 bg-black text-white'>
            <Image src='https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/429661012_717305203887328_8763798122150222565_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEw8OIi4te9yZdrM69GOsWsGrqWaVpcY6caupZpWlxjp5RVd5SK9X0XdhjmjO7xtjzLQnFPyvxD4XRWoPDcftim&_nc_ohc=hLw7tR3JIy8AX9_QgIO&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfBxUis7XWSxNUthGrF2Ez93EQpUc_ul6o8GJxco5fvF2g&oe=65E049C4' width={300} height={300} alt="mom" className="rounded-xl" />
          
            <p>Proyecto Ecommerce</p>
            <div className=' w-full flex gap-5 justify-center  bg-pink-300 p-6 hover:bg-pink-700 transition-all'>
                <Link href='https://github.com/'><MdFindInPage  fontSize={30} color='black'/></Link>
              
                
            </div>
        </motion.div>
  )
}

export default CardEcommerce