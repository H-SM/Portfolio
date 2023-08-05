import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import {  menu, hsmlogo } from '../assets';
import { navLinks } from '../constants';
import '../index.css';

const Navbar = () => {
  return (
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddingX} py-8 relative`}
  >
    <div className='absolute w-[50%] inset-0 z-0 gradient-01'></div>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img src={hsmlogo} alt="srch" className='w-[71px] h-[40px] object-contain' />
      <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
        HARMAN SINGH MALHOTRA
      </h2>
      {/* make the NAVBAR BURGER MENU HERE TODO:  */}
      <img src={menu} alt="menu" className='w-[24px] h-[24px] object-contain' />
    </div>
    </motion.nav>
  )
}

export default Navbar;