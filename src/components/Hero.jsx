import React from 'react'

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { herobg } from '../assets';
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
      <div className='flex justify-center items-center flex-col relative z-20' style={{fontFamily:'Poppins'}}>
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
    </motion.div>
    </section>
    </>
  )
}

export default Hero