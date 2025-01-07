import React from 'react';
//import bannerImg 

const ProjectCard = ({title,main,bannerImg,demoLink,sourceLink}) => {
  return (
    <div className=' md:p-6 flex flex-col h-110 w-80 bg-[#0c0e19] border rounded-md p-5  shadow-xl shadow-slate-900 '>
        <div className='relative h-48 w-full overflow-hidden rounded-t-md'>
            <img className='w-full h-full object-cover' src={bannerImg} alt=''/>
        </div>
        <h3 className='px-2 mt-2 md:py-0 text-xl md:text-2xl font-bold leading-normal'>
            {title}
        </h3>
        <p className='px-1 mt-1 text-sm text-gray-400 md:text-md leading-tight py-2'>
            {main}
        </p>
        <div className=' p-2 md:p-4 mt-4 flex gap-2 md:gap-4'>
        <a href={demoLink} target='_blank' rel='noopener noreferrer'>
            <button className=' text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                Demo
            </button>
        </a>
        <a href={sourceLink} target='_blank' rel='noopener noreferrer'>
            <button className=' text-white py-2 px-3 text-sm md:text-lg md:px-4 hover:opacity-85  duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
                Source Code
            </button>
        </a>
        </div>
        

    </div>
  )
}

export default ProjectCard