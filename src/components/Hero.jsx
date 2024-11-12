import React from 'react'
import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/logo_jm.jpg'
import { motion, optimizedAppearDataAttribute } from "framer-motion"

const container = (delay) =>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})

function Hero() {
    return (
        <div className='border-b border-blue-950 pb-4 lg:mb-36'>
            <div className="flex flex-wrap ">
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start ml-2 lg:ml-20'>
                        <motion.h1 
                        variants = {container(0)}
                        initial="hidden"
                        animate="visible"
                        className='pb-8 text-5xl font-extralight tracking-tight lg:mt-8 lg:text-8xl'>Joel Michael</motion.h1>
                        <motion.span 
                            variants = {container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-purple-300 via-sky-900 to-blue-500 bg-clip-text text-4xl tracking-tight text-transparent text-center'>Engineering Intelligent Solutions</motion.span>
                        <motion.p 
                        variants = {container(1)}
                        initial="hidden"
                        animate="visible"
                        className='my-2 max-w-xl py-6 font-light tracking-tighter lg:text-left px-4 lg:px-0 text-lg'>{HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:pr-20 lg:pb-32 flex justify-end items-center pl-6 pr-6'>
                    <motion.img 
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1.2}}
                    src={profilePic} alt="profile" className='h-auto max-h-full w-auto max-w-full lg:h-[400px] lg:w-auto' />
                </div>
            </div>
        </div>
    )
}

export default Hero
