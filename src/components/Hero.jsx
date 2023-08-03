import React from 'react'

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => {
  return (
    <>
    <section className={`${styles.paddingY} ms:pl-16 pl-6`}>
    <motion.div 
    variants={staggerContainer} 
    initial="hidden" 
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className='flex justify-center items-center flex-col relative z-10'>
          <motion.h1 variants={textVariant(1.1)} className={styles.heroTopperHeading}>
            HELLO, THIS IS
          </motion.h1>
          <motion.div
          variants={textVariant(1.2)} className='flex flex-row justify-center items-center'>
            <h1 className={styles.heroHeading}>H</h1>
            {/* <div className={styles.heroDText}></div> */}
            <h1 className={`${styles.heroHeading} font`}>S</h1>
            {/* think about something new here TODO: */}
            <h1 className={styles.heroHeading}>M</h1>
            
          </motion.div>
      </div>
      <div className="gradient-02 z-0" />
    </motion.div>
    </section>
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[50px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}text-white`}>Ayo, everyone <span className='text-bold text-[#915eff]'>Harman Singh Malhotra</span> here</h1>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero