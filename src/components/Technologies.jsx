import React from 'react'
import { FaRobot } from 'react-icons/fa';
import { SiArduino } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa'
import { SiBlender } from 'react-icons/si';

import { FaMicrochip } from 'react-icons/fa'; 

import { SiPython } from 'react-icons/si'
import { motion } from "framer-motion"

const iconVariants =(duration) =>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})

function Technologies() {
    return (
        <div className='border-b border-purple-950 pb-24'>
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className='my-20 text-center text-4xl'>Technologies</motion.h1>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaRobot className='text-7xl text-slate-400' />
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiArduino  className='text-7xl text-sky-400' />
                </motion.div>
                
                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiBlender className='text-7xl text-orange-500 bg-white p-2 rounded-lg' />
                </motion.div>

                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaMicrochip className='text-7xl text-purple-300' />
                </motion.div>
                
                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <div className="relative">
                        <SiPython className="text-blue-500 text-7xl" />
                        <SiPython className="absolute top-0 text-yellow-500 text-7xl" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0% 100%)' }} />
                    </div>
                </motion.div>

                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaGithub className='text-7xl text-white' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies
