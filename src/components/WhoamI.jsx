'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { arrowdown } from '../assets';

const About = () => (
    <>
    <div>
  <section className={`${styles.padding} relative z-10`}>
    
    <div className='gradient-02 z-0'></div>
    <motion.div
    variants={staggerContainer} 
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
      <TypingText title="| Who am I?" textStyles="text-center"/>
      <motion.p
      variants={fadeIn('up','tween',0.2,1)}
      className='mt-[8px] font-normal sm:text-[29px] text-[18px] text-center text-secondary-white'>
        Ayo, everyone! This is <span className='font-extrabold text-white'>Harman Singh Malhortra. </span>
          A 
        <span className='font-extrabold text-white'> full-stack enthusiast</span> 
        , showcasing diverse 
        <span className='font-extrabold text-white'> projects on GitHub</span>
        , exploring web software realms. Passionate about 
        <span className='font-extrabold text-white'> coding & creating innovative solutions. </span>
        "Innovative lines of code intertwining to craft digital solutions that inspire and impact."
      </motion.p>
      <motion.img
      variants={fadeIn('up','tween',0.3,1)} src={arrowdown} alt='arw-dwn' className='w-[18px] h-[28px] object-contain mt-[28px]'>
      </motion.img>
    </motion.div>
  </section>
  </div>
  </>
);

export default About;

