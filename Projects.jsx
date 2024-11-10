import React from 'react';
import ProjectCard from "./ProjectCard";
import bannerImg1 from "../assets/moviedeck.jpg";
import bannerImg2 from "../assets/reiancedigital.jpeg";

const Projects = () => {
  return (
    <div id='projects' className=' p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>
            Projects
        </h1>
        <div className='py-12 px-0 flex flex-wrap gap-5 justify-center'>
            <ProjectCard
                title="Movie Deck"
                main="This is a movie deck website created using HTML, CSS and JavaScript"
                bannerImg={bannerImg1}
                />
                <ProjectCard
                title="Reliance Digital Clone "
                main="This is a e-commerce website clone created using HTML, CSS , JavaScript and React js"
                bannerImg={bannerImg2}
                />
        </div>
    </div>
  )
}

export default Projects