'use client'
import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';

const CardHome = () => {
  return (
    <div className='bg-black'>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className="grid grid-cols-1 pr-10 bg-black text-white " >
        
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen w-full justify-items-center items-center ">
        <Image src='https://avatars.githubusercontent.com/u/134992126?s=400&u=4ebc234e421c2c8e5eca6083e9d2116289ffd3f6&v=4' width={400} height={400} alt="mom" className="rounded-xl"/>
        <div className="flex flex-col gap-5">
          
          <p className="text-lg">
            Bienvenidos!
          </p>
          
          <p className="text-sm">
            
  
  
   Soy una desarrolladora web comprometida con la excelencia, la innovación y la entrega de productos de alta calidad que impactan de manera positiva a los usuarios. Estoy emocionada de seguir creciendo profesionalmente en este emocionante campo y contribuir al éxito de proyectos web inspiradores y significativos.
          </p>
          <button className="p-5 bg-pink-500 rounded-xl hover:bg-pink-700 transition-all w-full xl:w-1/6 px-5 text-sm" >descargar CV</button>
        </div>
        </div>
        
      </motion.div>
  
    </div>
  )
}

export default CardHome