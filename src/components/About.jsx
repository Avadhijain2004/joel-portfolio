import React from 'react'
import aboutImg from '../assets/formal-joel1.jpg'
import { motion } from "framer-motion"

function About() {
    return (
        <div className='border-b border-blue-950 pb-16'>
            <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:pl-20 lg:pr-0 pl-6 pr-6'>
                    <div className='flex items-center justify-start bg-slate-700 lg:w-[600px] rounded-xl'>
                        <motion.img 
                        initial={{x:-100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1}}
                        className='h-auto max-h-full w-auto max-w-full lg:h-[600px] lg:w-auto rounded-2xl p-10 pl-10' src={aboutImg} alt="About Image" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:pr-20 px-4'>
                    <div className='flex justify-center lg:justify-end'>
                        <motion.p 
                        initial={{x:100,opacity:0}}
                        whileInView={{x:0,opacity:1}}
                        transition={{duration:1}}
                        className='lg:pl-16 lg:pt-0 pt-16
                        pl-2 font-light tracking-tighter text-base'>I am a dedicated Electronics and Instrumentation Engineer with a strong passion for developing intelligent and efficient systems that blend hardware and software seamlessly. My expertise spans across PCB design, where I craft precise and effective circuit boards, and PLC programming, which allows me to automate processes and enhance system functionality. With a solid background in 3D modeling, I can visualize and create robust mechanical components and prototypes, further bridging the gap between concept and reality.
                        <br /><br />
                        My experience extends into C++ Arduino development, where I create embedded systems for various applications, ensuring optimal performance and adaptability. Additionally, I specialize in designing Human-Machine Interfaces (HMI) that offer intuitive and user-friendly interactions. I also bring a unique edge with my skills in prompt engineering, enabling me to work effectively with AI systems to deliver smart, data-driven solutions.
                        <br /><br />
                        Driven by curiosity, precision, and a commitment to innovation, I continuously strive to develop solutions that enhance productivity, simplify processes, and deliver lasting impact. I enjoy pushing the boundaries of technology, creating designs that not only solve today's problems but also anticipate the needs of tomorrow.
                        <br /><br />
                        I am actively seeking opportunities that will allow me to leverage my skills and expand my horizons within a forward-thinking team. My goal is to contribute to impactful projects, continue learning and growing as a developer, and ultimately, play a key role in delivering high-quality software solutions.</motion.p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
