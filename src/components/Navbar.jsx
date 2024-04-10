import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants2 } from '../utils/motion';
import {  menu, hsmlogo, close } from '../assets';
import { navLinks } from '../constants';
import '../index.css';


const Navbar = () => {
  const [opener, setOpener] = useState(false);

  const handleClick = () => {
  setOpener(!opener);
  }
  return (
    <section className='relative z-10'>
    <motion.nav
    variants={navVariants2}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddingX} py-8 relative`}
    id="nav"
  >
    <div className='absolute w-[50%] top-2 inset-0 z-[0] gradient-01 opacity-90'></div>
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
  <img
    id="menu-button"
    aria-expanded="false"
    aria-haspopup="true"
    src={hsmlogo}
    alt="srch"
    className='w-[71px] h-[40px] object-contain z-20'
  />
  <h2 className='font-extrabold text-[24px] leading-[30px] text-white z-20'>
    HARMAN SINGH MALHOTRA
  </h2>
      <div className="relative inline-block text-left">
  <img src={menu} alt="menu" className="w-[24px] h-[24px] object-contain z-3" onClick={handleClick}/>
  <div
  className={`${opener?"absolute opacity-100":"hidden opacity-0"} right-0 z-10 mt-2 w-56 origin-top-right rounded-md lg:bg-cyan-800/10 shadow-lg shadow-cyan-500/70 focus:outline-none transition duration-200 ease-in-out bg-cyan-900/90`} id="menu">
    <div className='flex justify-end' onClick={handleClick}>
    <div className="text-slate-300 block px-4 py-1 z-30 right-1" role="menuitem" id="menu-item-6">
    <div className='mx-1 my-2 mt-3' >
    <img src={close} alt="clocse btn"  />
    </div></div>
    </div>  

    <a href="#Overview" className="text-slate-300 block px-4 py-2 text-[18px] hover:bg-cyan-800/30 transition  duration-75 ease-in-out hover:ring-cyan-200/40 hover:ring-1 z-30" role="menuitem" id="menu-item-0">Overview</a>
    <a href="#Experience" className="text-slate-300 block px-4 py-2 text-[18px] hover:bg-cyan-800/30 transition duration-75 ease-in-out hover:ring-cyan-200/40 hover:ring-1 z-30" role="menuitem" id="menu-item-1">Experience</a>
    <a href="#Projects" className="text-slate-300 block px-4 py-2 text-[18px] hover:bg-cyan-800/30 transition duration-75 ease-in-out hover:ring-cyan-200/40 hover:ring-1 z-30" role="menuitem" id="menu-item-2">Projects</a>
    <a href="#Resume" className="text-slate-300 block px-4 py-2 text-[18px] hover:bg-cyan-800/30 transition duration-75 ease-in-out hover:ring-cyan-200/40 hover:ring-1 z-30" role="menuitem" id="menu-item-3">Resume</a>
    <a href="#Contact" className="text-slate-300 block px-4 py-2 text-[18px] hover:bg-cyan-800/30 transition duration-75 ease-in-out hover:ring-cyan-200/40 hover:ring-1" role="menuitem z-30" id="menu-item-4">Contact</a>
  </div>
</div>

    
</div>

    </motion.nav>
    </section>
  )
}

export default Navbar;