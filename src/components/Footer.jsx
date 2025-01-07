import React from 'react'
import {MdOutlineEmail} from 'react-icons/md';
import {CiLinkedin} from 'react-icons/ci';
import {FaGithub} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className=' max-w-[1100px] border border-t-4 border-gray-700   p-10 md:p-12 flex items-center
     justify-around mx-auto gap-6'>
      <div className='flex flex-col items-start mb-4 md:mb-0 '>
        <h2 className="primary-color text-2xl md:text-6xl font-bold">Contact</h2>
        <h3 className="primary-color text-sm md:text-2xl font-normal mt-2">
          Feel Free To reach out!
        </h3>
      </div>
        {/* <p className='text-gray-600'>sambarajuharith2018@gmail.com <br/> #WebDev2024</p> */}

      <ul className="text-sm md:text-xl text-gray-600">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href='mailto:sambarajuharith2018@gmail.com' className='hover:underline cursor-pointer'>
            sambarajuharith2018@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href='https://www.linkedin.com/in/harith-sambaraju-099703249/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline
              cursor-pointer'>
                Linkedin Profile
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          {/* https://github.com/Harith14-01 */}
          <a href='https://github.com/Harith14-01'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline
              cursor-pointer'>
                Github Profile
          </a>
        </li>
      </ul> 
        
    </div>
  )
}

export default Footer