import React, { useRef, useEffect } from 'react'

import Card from './UI/Card';

import "./Home.css";

import arrow from '../assets/arrow.svg';
import heroimage from '../assets/heroimage.png';

const Home = ({ projects, section }) => {

  const projectsRef = useRef();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.scrollTo(0,0);
    if (section === 'home') {
      window.scrollTo(0,0);
    }
    if (section === 'projects') {
      scrollToSection(projectsRef);
    }
  }, [projectsRef, scrollToSection]);

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center md:px-16 py-16 md:pt-0 h-screen">
        <div className='flex flex-col md:flex-row justify-between items-center w-3/4 md:w-full'>
          <div className='flex flex-col items-center text-center md:text-left md:items-start w-full md:w-1/2'>
            <div className="wave text-5xl md:text-7xl">👋</div>
            <h1 className="text-3xl md:text-5xl pb-5 font-extrabold text-lime-500">Nice to meet you!</h1>
            <div className='border-b-8 border-lime-500 w-56 my-5' />
            <h3 class="text-lg md:text-2xl py-3">Welcome to my portfolio.</h3>
            <p class="py-2 w-5/6 text-sm md:text-base">
              I am a full-stack developer with a passion for turning my hobbies into realities through 
              design and code.
            </p>
          </div>
          <div className='flex flex-row justify-center md:justify-end w-full md:w-1/2'>
            <img src={heroimage} className='w-96 lg:w-120' />
          </div>
        </div>
        <img src={arrow} onClick={() => scrollToSection(projectsRef)} className='flex h-12 animate-bounce mt-12 md:mt-24 lg:mt-5 hover:cursor-pointer' />
      </div>
      <div ref={projectsRef} className='flex flex-col md:flex-row justify-center items-center flex-wrap px-10 py-5'>
          {projects.map((project) => <Card key={project.id} imagePath={project.imagePath} name={project.name} link={project.link} dscrp={project.dscrp} />)}
      </div>
    </React.Fragment>
  )
}

export default Home;