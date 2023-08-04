import React from 'react'
import { TitleText, TypingText } from './CustomTexts'
import { motion } from 'framer-motion';
import styles from '../styles';
import { github, arrow } from '../assets';

import { projects } from '../constants';
import { fadeIn, slideIn } from '../utils/motion';

const ProjectCard = ({ index, name , description, tags, image, source_code_link, url_link}) => {
  return(
    <motion.div
    variants={fadeIn("up","spring", index*0.5, 0.75)}>
      <div className='bg-black/25 hover:bg-black/40 p-5 rounded-2xl sm:w-[360px] w-full transition ease-linear hover:shadow-lg hover:shadow-cyan-500/50 hover:ring-emerald-200/60 hover:ring-2'>
        <div className='relative w-full h-[150px]'>
          <img src={image} alt="something" className='w-full h-full object-cover rounded-2xl'/>

        <div className='absolute inset-0 flex justify-between m-3 card-img_hover'>
        <div onClick={() => window.open(source_code_link,"_blank")}
          className="black-gradient w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer transition ease-linear hover:scale-105 hover:shadow-cyan-500/50 hover:ring-emerald-200/60 hover:ring-2">
            <img src={github} alt="ghub" className='w-[65%] h-[65%] object-contain'/>
        </div>
          <div onClick={() => window.open(url_link,"_blank")}
          className="black-gradient w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer transition ease-linear hover:scale-105 hover:shadow-cyan-500/90 hover:ring-green-300/80 hover:ring-2">
            <img src={arrow} alt="ghub" className='w-[45%] h-[45%] object-contain'/>
          </div>
        </div>

        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag,index)=> (
            <p key={index} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>  
      </div>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
    <div className='mt-[100px]'>
      <TypingText title="| what I have built?" textStyle="text-center"/>
      <TitleText title={<>A few of my Projects...</>} textStyle="text-center"/>

      <div className='w-full flex justify-center items-center'>
        <motion.p
        variants={fadeIn('up','tween',0.2,1)}
        className='mt-3 text-secondary/60 text-[17px] max-w-5xl leading-[30px] text-center'>
          Following are a few projects showcasing my skills and experience through real-world examples if my work. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='flex justify-center items-center'>
      <div className='mt-20 flex flex-wrap gap-7'>
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