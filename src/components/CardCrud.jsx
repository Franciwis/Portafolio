'use client'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MdFindInPage } from "react-icons/md";

const CardCrud = () => {
  return (
    <motion.div  initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className='flex flex-col w-full h-screen justify-center items-center px-28
         gap-10 bg-black text-white'>
            <Image src='https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/429684866_717305190553996_5145752492881685082_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHQ7pXKCa3Z9JoJ3ksEbjXQEnDhLILBd9UScOEsgsF31RkHQOUjZ7FPoEZ_52d6Hiq7QCkSSJ8PDuylWG9kKJZJ&_nc_ohc=JMhWU7fhRuYAX-d2186&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfAGy9j-KS5aKO96e0yXUP6hSVmgnfyB9hR3oGpwoAnuhA&oe=65DF54A0' width={300} height={300} alt="mom" className="rounded-xl" />
          
            <p>Proyecto Crud</p>
            <div className=' w-full flex gap-5 justify-center  bg-pink-300 p-6 hover:bg-pink-700 transition-all'>
                <Link href='https://github.com/'><MdFindInPage  fontSize={30} color='black'/></Link>
              
                
            </div>
        </motion.div>
  )
}

export default CardCrud