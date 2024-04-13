import React from 'react'

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { herobg, hsm } from '../assets';
const Hero = () => {
  return (
    <>
    <section className={`${styles.paddingY} h-[90%] my-11`}>
    <motion.div 
    variants={staggerContainer} 
    initial="hidden" 
    whileInView="show"
    viewport={{ once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className='flex justify-center items-center flex-col relative' style={{fontFamily:'Poppins'}}>
          <motion.h1 variants={textVariant(1.1)} className={`${styles.heroTopperHeading} w-full flex justify-center items-center`}>
            HELLO, THIS IS
          </motion.h1>
          <motion.div
          variants={textVariant(1.2)} className='flex flex-row justify-center items-center'>
            <img src={hsm} alt="gif" className='w-[356px] h-[200px]'/>
            {/* <h1 className={styles.heroHeading}>H</h1> */}
            {/* <div className={styles.heroDText}></div> */}
            {/* <h1 className={`${styles.heroHeading} font`}>S</h1> */}
            {/* <h1 className={styles.heroHeading}>M</h1>             */}
          </motion.div>
      </div>
    </motion.div>
    </section>
    </>
  )
}

export default Hero