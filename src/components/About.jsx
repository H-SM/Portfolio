import React from 'react'
import { motion } from 'framer-motion';
import { StartSteps, TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { getstarted } from '../assets';

import { startingFeatures } from '../constants';


const About = () => {
  return (
    <>
    <section className={`${styles.padding} relative z-10`}>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: 'false',amount: 0.25}}
      className={`${styles.innerWidth} mx-auto my-[200px] flex lg:flex-row flex-col gap-8`}>

        <motion.div
        variants={planetVariants('left')}
        viewport={{once: 'false',amount: 0.25}}
        className={`flex-1 ${styles.flexCenter}`}>
       

          <img src={getstarted} alt="plnt-1" className='w-[100%] h-[100%] object-contain hover:scale-105 transition duration-500 hover:drop-shadow-xl hover:saturate-50 hover:shadow-cyan-500/90 hover: ease-in-out'/>
        </motion.div>
        <motion.div
        variants={fadeIn('left','tween',0.25,1)}
        className='flex-[0.75] flex justify-center flex-col' id="Overview">

          <TypingText title="| My Introduction"/>
          <TitleText title={<>A Quick Overview</>}/>
          <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
            {startingFeatures.map((feature,index) => (
              <StartSteps
              key={index}
              number={index+1} 
              txt={feature}/>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
    </>
  )
}

export default About