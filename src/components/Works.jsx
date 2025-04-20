import React from 'react'
import { TitleText, TypingText } from './CustomTexts'
import { motion } from 'framer-motion';
import styles from '../styles';
import { github, arrow } from '../assets';

import { projects } from '../constants';
import { fadeIn, slideIn } from '../utils/motion';
import { Navigate } from 'react-router-dom';

const ProjectCard = ({ index, name , description, tags, image, source_code_link, url_link, prod}) => {
  return(
    <section className='relative z-10'>
    <motion.div
    variants={fadeIn("up","spring", index*0.5, 0.75)} className='flex w-full h-fit justify-center items-center'>
      <div className='bg-black/30 hover:bg-black/40 p-5 rounded-2xl md:w-[360px] xs:w-[25rem] w-[90%] transition ease-linear hover:shadow-lg hover:shadow-cyan-500/50 hover:ring-emerald-200/60 hover:ring-2 flex flex-col justify-evenly max-w-[36rem] h-[25rem]'>
        <div className='relative w-full max-h-[8rem] rounded-2xl overflow-hidden bg-no-repeat bg-cover '>
          <img src={image} alt="something" className='transition duration-300 ease-in-out hover:scale-105 '/>
        </div>

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


        <div className='mt-2'>
          <div className='flex flex-row items-center'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {prod &&
          <div className='my-1 rounded-sm  focus:border-none flex flex-row gap-1 hover:bg-opacity-5 hover:shadow-md hover:text-white/80 text-orange-400/80 text-[0.857rem] transition ease-in-out duration-200 items-center h-full px-1' title="Currently in production">
          <svg fill="currentColor" width="25" height="25" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M29.9,19.5l-4-7C25.7,12.2,25.4,12,25,12H17c-0.4,0-0.7,0.2-0.9,0.5l-4,7c-0.2,0.3-0.2,0.7,0,1l4,7c0.2,0.3,0.5,0.5,0.9,0.5 H25c0.4,0,0.7-0.2,0.9-0.5l4-7C30.1,20.2,30.1,19.8,29.9,19.5z M21,25c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S23.8,25,21,25z"></path> <path d="M15.6,9.5l-2.9-5C12.6,4.2,12.2,4,11.9,4H6.1C5.8,4,5.4,4.2,5.2,4.5l-2.9,5c-0.2,0.3-0.2,0.7,0,1l2.9,5 C5.4,15.8,5.8,16,6.1,16h5.8c0.4,0,0.7-0.2,0.9-0.5l2.9-5C15.8,10.2,15.8,9.8,15.6,9.5z M9,13c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3 S10.7,13,9,13z"></path> </g></svg>
          {/* <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
          </div>}
          </div>
          <p className=' text-secondary-white text-[14px]'>{description}</p>
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
    </section>
  )
}
const Works = () => {
  return (
    <section className='relative z-10'>
    <div className='mt-[15rem] z-50 pt-12' id="Projects">
      <TypingText title="| what I have built?" textStyle="text-center"/>
      <TitleText title={<>A few of my Projects...</>} textStyle="text-center"/>

      <div className='w-full flex justify-center items-center'>
        <motion.p
        variants={fadeIn('up','tween',0.2,1)}
        className='mt-3 text-secondary/60 text-[17px] max-w-5xl leading-[30px] text-center'>
          Following are a few projects showcasing my skills and experience through real-world examples if my work. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='flex justify-center items-center mt-20 md:mx-[60px]'>
        <div className='grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 md:grid-cols-2 lg:gap-7 gap-[1rem] mb-12 justify-center items-center'>
      {projects.map((project, index) => (
        <ProjectCard key={index} index={index} {...project}/>
      ))}
      </div>
      </div>
    </div>
    </section>
  )
}

export default Works