import React from 'react'
import logo from '../assets/logo-joel.jpeg'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'


function Navbar() {

    function handleIconClick(iconName) {
        if (iconName === 'LinkedIn') {
          window.open('https://www.linkedin.com/in/joel-michael-4533a723b/', '_blank');
        } 
        if (iconName === 'GitHub') {
            window.open('https://github.com/JoelMichael001', '_blank');
        } 
      }

    return (
        <nav className='mb-5 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center w-24 h-10 lg:ml-20'>
                <img className='' src={logo} alt="logo" />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl mr-4 lg:mr-20 '>
                <FaLinkedin onClick={() => handleIconClick('LinkedIn')} className='hover:text-purple-400'/>
                <FaGithub onClick={() => handleIconClick('GitHub')} className='hover:text-purple-400'/>
            </div>
        </nav>
    )
}

export default Navbar
