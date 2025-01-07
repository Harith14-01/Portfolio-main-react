import React from 'react';
import ProjectCard from "./ProjectCard";
import bannerImg1 from "../assets/spotify.png";
//import bannerImg3 from "../assets/moviedeck.jpg";
import bannerImg2 from "../assets/hangmanimage.png";
import bannerImg4 from "../assets/reiancedigital.jpeg";

const Projects = () => {
  return (
    <div id='projects' className=' p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>
            Projects
        </h1>
        <div className='py-12 px-0 flex flex-wrap gap-5 justify-center'>
            
        <ProjectCard
                title="Spotify clone"
                main="This is a spotify website clone created using HTML and CSS"
                bannerImg={bannerImg1}
                demoLink="https://spotify-clone-htmlcss.netlify.app/"
                sourceLink="https://github.com/Harith14-01/Spotify-clone-html-css"
                />
            <ProjectCard
                title="Hangman Game"
                main="This is a Hangman Game built using HTML, CSS and Javascript"
                bannerImg={bannerImg2}
                demoLink="https://hangman-game0js.netlify.app/"
                sourceLink="https://github.com/Harith14-01/Hangman-game-Javascript"
                />
            {/* <ProjectCard
                title="Movie Deck"
                main="This is a movie deck website created using HTML, CSS and JavaScript"
                bannerImg={bannerImg3}
                demoLink=""
                sourceLink="https://github.com/Harith14-01/Movie-Deck_Js-proj"
                /> */}
                <ProjectCard
                title="Reliance Digital Clone "
                main="This is a e-commerce website clone created using HTML, CSS , JavaScript and React js"
                bannerImg={bannerImg4}
                demoLink="https://reliance-clone-my-a7z0pyk7a-harith-sambarajus-projects.vercel.app/"
                sourceLink="https://github.com/Harith14-01/Reliance-clone-my-app"
                />
        </div>
    </div>
  )
}

export default Projects