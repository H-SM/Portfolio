import React from 'react'
import { TitleText, TypingText } from './CustomTexts'
import { motion } from 'framer-motion';
import styles from '../styles';
import { github, arrow } from '../assets';

import { projects } from '../constants';
import { fadeIn, slideIn } from '../utils/motion';
import { Navigate } from 'react-router-dom';

const ProjectCard = ({ index, name , description, tags, image, source_code_link, url_link}) => {
  return(
    <motion.div
    variants={fadeIn("up","spring", index*0.5, 0.75)}>
      <div className='bg-black/25 hover:bg-black/40 p-5 rounded-2xl sm:w-[360px] w-full h-[26rem] transition ease-linear hover:shadow-lg hover:shadow-cyan-500/50 hover:ring-emerald-200/60 hover:ring-2 flex flex-col justify-evenly max-w-[36rem]'>
        <div className='relative w-full h-[10rem]'>
          <img src={image} alt="something" className='w-full h-full object-cover rounded-2xl'/>

        {/* <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
        <div onClick={() => window.open(source_code_link,"_blank")}
          className="black-gradient w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer transition ease-linear hover:scale-105 hover:shadow-cyan-500/50 hover:ring-emerald-200/60 hover:ring-2">
            <img src={github} alt="ghub" className='w-[65%] h-[65%] object-contain'/>
        </div>
          <div onClick={() =>{if(url_link){ window.open(url_link,"_blank")}else{alert("This application has no deployed link, You can still visit up the code for it!")}}}
          className="black-gradient w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer transition ease-linear hover:scale-105 hover:shadow-cyan-500/90 hover:ring-green-300/80 hover:ring-2">
            <img src={arrow} alt="ghub" className='w-[45%] h-[45%] object-contain'/> 
          </div>
        </div> */}

        </div>

        <div>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-1 flex flex-wrap gap-2'>
          {tags.map((tag,index)=> (
            <p key={index} className={`text-[0.75rem] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div> 
        <div className='mt-3 flex flex-start gap-3 w-full'>
          <button onClick={() => window.open(source_code_link,"_blank")} className='ring-1 ring-cyan-500/40 px-2 py-[0.1rem] rounded-sm focus:border-none flex flex-row gap-1 hover:bg-cyan-100 hover:bg-opacity-5 hover:shadow-md hover:shadow-cyan-500/50 hover:text-white/80 text-cyan-100/80 transition ease-in-out duration-200 items-center h-full'><p className='font-semibold'>GitHub</p>
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" d="M3 2.75A2.75 2.75 0 015.75 0h14.5a.75.75 0 01.75.75v20.5a.75.75 0 01-.75.75h-6a.75.75 0 010-1.5h5.25v-4H6A1.5 1.5 0 004.5 18v.75c0 .716.43 1.334 1.05 1.605a.75.75 0 01-.6 1.374A3.25 3.25 0 013 18.75v-16zM19.5 1.5V15H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5z"></path><path d="M7 18.25a.25.25 0 01.25-.25h5a.25.25 0 01.25.25v5.01a.25.25 0 01-.397.201l-2.206-1.604a.25.25 0 00-.294 0L7.397 23.46a.25.25 0 01-.397-.2v-5.01z"></path></g></svg>
          </button>

          <button onClick={() =>{if(url_link){ window.open(url_link,"_blank")}else{alert("This application has no deployed link, You can still visit up the code for it!")}}} className='ring-1 ring-cyan-500/40 px-2 py-[0.1rem] rounded-sm focus:border-none flex flex-row gap-1 hover:bg-cyan-100 hover:bg-opacity-5 hover:shadow-md hover:shadow-cyan-500/50 hover:text-white/80 text-cyan-100/80 transition ease-in-out duration-200 items-center h-full'><p className='font-semibold'>visit site</p>
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          </button>
      </div>
      </div>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
    <div className='mt-[100px]' id="Projects">
      <TypingText title="| what I have built?" textStyle="text-center"/>
      <TitleText title={<>A few of my Projects...</>} textStyle="text-center"/>

      <div className='w-full flex justify-center items-center'>
        <motion.p
        variants={fadeIn('up','tween',0.2,1)}
        className='mt-3 text-secondary/60 text-[17px] max-w-5xl leading-[30px] text-center'>
          Following are a few projects showcasing my skills and experience through real-world examples if my work. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='flex justify-center items-center mt-20 md:mx-[60px] gap-7'>
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 gap-7'>
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} {...project}/>
      ))}
      </div>
      </div>
    </div>
    </>
  )
}

export default Works