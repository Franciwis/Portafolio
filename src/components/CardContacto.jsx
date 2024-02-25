'use client'
import Form from 'react-bootstrap/Form';
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
const CardContacto = () => {
    return (
        <div className=' bg-black text-white'>
         <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className='grid grid-cols-2 w-full h-screen justify-center items-center px-28
        gap-10' >
           <div>
           <Image src='https://z-p3-scontent.fscl29-1.fna.fbcdn.net/v/t39.30808-6/429664236_10160827336478400_4437457987753928529_n.jpg?stp=dst-jpg_p600x600&_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGBwMlbmUmGJD0nfjr1h6ASFMBcrCyBqtMUwFysLIGq03XV37YRUkfPB6zdI9kct_4&_nc_ohc=Hir0TXZvblEAX98bUdO&_nc_zt=23&_nc_ht=z-p3-scontent.fscl29-1.fna&oh=00_AfBXyi9HVvN4yhJ6cFgnbRogoy1_zn_G3SY1yviVAFU5mw&oe=65E0885D' width={300} height={300} alt="Francis" className="rounded-xl" />
            <p className='font-mono'>
                Deja tus datos o tu comentario y me comunicaré contigo.

            </p>
            </div> 
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='font-mono'>Ingrese su Mail:</Form.Label>
                        <Form.Control className='text-black rounded-md' type="email" placeholder="nombre@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label className='font-mono'>Ingrese su nombre:</Form.Label>
                        <Form.Control className='text-black rounded-md' type="name" placeholder="Nombre Apellido" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='font-mono'>Deje su mensaje:</Form.Label>
                        <Form.Control className='text-black rounded-md' as="textarea" rows={5} cols={90} />
                    </Form.Group>
                    <button className='bg-pink bg-pink-500 rounded-md p-4 hover:bg-pink-700 transition-all font-mono' >enviar</button>
                </Form>
            </div>
        </motion.div>
        </div>
    )
};



export default CardContacto