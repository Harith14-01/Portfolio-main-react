import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import vsstuio from "../assets/vs_studio.jpg";
import bootstrap from "../assets/bootstrap.png";
import canva from "../assets/canva.png";
import express from '../assets/express-1.png';
import github from "../assets/github-logo.webp";
import mongodb from "../assets/MongoDB_Logo.svg.png";
import nodejs from "../assets/Node.js_logo.svg";
import postman from "../assets/postman.png"; 
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[500px] max-w-[1100px] mx-auto 
                    py-8 '>
        {/* <div className='bg-blue-300 text-gray-400 md:h-[150px] max-w-[1100px] mx-auto grid grid-cols-3
                       place-items-center md:flex md:justify-between md:items-starts'>  */}
        <div className='flex flex-col md:flex md:justify-between items-center mb-8'>
            <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
            My  Tech Stack
            </h2>
            <div className='flex space-x-8  md:justify-between overflow-x-auto max-[600px]:flex-col items-center '>
                <div className='flex flex-col  justify-center items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                    <img className='w-full h-full object-contain' src={html} alt=""/>
                    <p className='mt-2'>HTML</p>
                </div>

                <div className='flex flex-col justify-center items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                    <img className='w-full h-full object-contain' src={css} alt=""/>
                    <p className='mt-2'>CSS</p>
                </div>

                <div className='flex flex-col  justify-center items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                    <img className='w-full h-full object-contain' src={javascript} alt=""/>
                    <p className='mt-2'>JavaScript</p>
                </div>

                <div className='flex flex-col justify-center items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                    <img className='w-full h-full object-contain' src={react} alt=""/>
                    <p className='mt-2'>React</p>
                </div>

                <div className='flex flex-col  justify-center items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                    <img className='w-full h-full object-contain' src={nodejs} alt=""/>
                    <p className='mt-2'>Node js</p>
                </div>

                <div className='flex flex-col justify-center items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
                    <img className='w-full h-full object-contain' src={express} alt=""/>
                    <p className='mt-2'>Express</p>
                </div>

                <div className='flex flex-col justify-center items-center  m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <       img className='w-full h-full object-contain' src={mongodb} alt=""/>
                    <p className='mt-2'>Mongo DB</p>
                </div>
            </div>
        </div>
        
        <br/>
        <div className='flex flex-col items-center'>
            <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
                Tools
            </h2>   
            <div className='flex space-x-8 overflow-x-auto max-[600px]:flex-col items-center'>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img className='w-full h-full object-contain' src={github} alt=""/>
            <p className='mt-2'>Github</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img className='w-full h-full object-contain' src={vsstuio} alt=""/>
            <p className='mt-2'>Vs Studio</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img className='w-full h-full object-contain' src={tailwind} alt=""/>
            <p className='mt-2'>Tailwind</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img className='w-full h-full object-contain' src={postman} alt=""/>
            <p className='mt-2'>Postman</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img className='w-full h-full object-contain' src={canva} alt=""/>
            <p className='mt-2'>Canva</p>
            </div>
            <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img className='w-full h-full object-contain' src={bootstrap} alt=""/>
            <p className='mt-2'>Bootstrap</p>
            </div>
            </div>
        </div> 
        

    </div>

    // <div className='bg-blue-300 text-gray-400 md:h-[150px] max-w-[1100px] mx-auto grid grid-cols-3
    //                 place-items-center md:flex md:justify-between md:items-center'>
    //                 </div>
  )
}

export default Skills