'use client'
import Form from 'react-bootstrap/Form';
import React from 'react'
import { motion } from 'framer-motion';

const CardContacto = () => {
    return (
        <div className=' bg-black text-white'>
         <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} className='grid grid-cols-2 w-full h-screen justify-center items-center px-28
        gap-10' >
           <div>
            <p>
                datos Francis Yañez

            </p>
            </div> 
            <div>
                <Form>
                    <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                        <Form.Label>Ingrese su Mail:</Form.Label>
                        <Form.Control className='text-black rounded-md' type="email" placeholder="nombre@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Ingrese su nombre:</Form.Label>
                        <Form.Control className='text-black rounded-md' type="name" placeholder="Nombre Apellido" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Deje su mensaje:</Form.Label>
                        <Form.Control className='text-black rounded-md' as="textarea" rows={5} cols={90} />
                    </Form.Group>
                    <button className='bg-pink bg-pink-500 rounded-md p-4 hover:bg-pink-700 transition-all' >enviar</button>
                </Form>
            </div>
        </motion.div>
        </div>
    )
};



export default CardContacto