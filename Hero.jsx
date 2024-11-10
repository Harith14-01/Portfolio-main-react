import React from 'react';
import heroImage from "../assets/profilepic.avif";
import {TypeAnimation} from "react-type-animation";
import resume from '../assets/resume.pdf';

const Hero = () => {
  return (
    <div id='about' className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1100px] md:h-[9 0vh] mx-auto py-8 bg-black'>

       <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img className='w-[150vh] h-[70vh] lg:w-[200px] px-3 ml-2 rounded-md' src={heroImage} alt='hero image'/>            
       </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span><br/>
                <TypeAnimation
                sequence={[
                    "Frontend Dev",
                    1000,
                    "Fullstack Dev",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                />
            </h1>

            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                My name is 
                <span className='text-blue-500'> Harith Sambaraju</span>, a passionate Developer with a knack for crafting seamless digital projects. With a strong foundation in HTML, CSS, and JavaScript, with expertise in MERN (MongoDB, Express.js, React.js, Node.js) stack.I thrive on turning ideas into robust web applications.
            </p>

            <div className='my-8'>
                <a href={resume} 
                download='Harith_Sambaraju_Resume.pdf'
                className='px-6 py-3 w-full rounded-xl mr-4
                        bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                    Download CV           
                </a>   
                <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4
                        border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
                        text-white hover:border-none'>
                            Contact
                </a>
            </div>

        </div>

    </div>
  )
}

export default Hero

