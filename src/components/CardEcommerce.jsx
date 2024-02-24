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
            <Image src='https://th.bing.com/th/id/OIP.YZKFQa7tfP68Gzejkz01iwHaJ4?rs=1&pid=ImgDetMain' width={300} height={300} alt="mom" className="rounded-xl" />
          
            <p>Proyecto Ecommerce</p>
            <div className=' w-full flex gap-5 justify-center  bg-pink-300 p-6 hover:bg-pink-700 transition-all'>
                <Link href='https://github.com/'><MdFindInPage  fontSize={30} color='black'/></Link>
              
                
            </div>
        </motion.div>
  )
}

export default CardEcommerce