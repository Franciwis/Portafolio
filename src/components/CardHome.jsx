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
        <Image src='https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/429786268_10160827336403400_1465237323276632185_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEtkzc8AV2bc3QOTCjLtpBZDFuYOzsGD0wMW5g7OwYPTCAPGCx_US9_vMg7n-vS318&_nc_ohc=cRXo7XEOjH0AX8w2J8Q&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfCVQAjFriKhcQtSWHKqWX-Xm0ZLcVf4gkhjX8lTy4__oQ&oe=65E03054' width={400} height={400} alt="Fran" className="rounded-xl"/>
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