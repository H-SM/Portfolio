import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';
import { TitleText, TypingText } from './CustomTexts';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: "#fff"}}
    contentArrowStyle={{ borderRight: '7px solid #232631'}}
    date={experience.date}
    iconStyle={{background:experience.iconBg }}
    icon={<div className='flex justify-center items-center w-full h-full'>
      <img src={experience.icon} alt={experience.company_name} className='w-[70%] h-[70%] object-contain' />
    </div>}
    >
      
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary-white text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point,index) => (
          <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <section className={`relative z-10`}>
      <motion.div
      variants={textVariant()}
      className='mt-[15rem] z-5'
      id="Experience">
      <TypingText title="| where have I worked? " textStyle="text-center"/>
      <TitleText title={<> My Work Experience<br className='md:block hidden'/></>} textStyle="text-center"/>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Experience