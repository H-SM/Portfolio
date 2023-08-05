import React from 'react'

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { CV, hsmlogo } from '../assets';

const Footer = () => {
  return (
    <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.padding} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[44px] text-[24px] text-white">Thank you for your visit here</h4>
        <a
        href={CV}
        target='_blank'
        rel='noopener noreferrer'
    >
    <button className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded-full px-8 py-3 text-[20px] my-8 transition duration-0 hover:duration-500 ease-linear hover:shadow-lg hover:shadow-cyan-500/50' >My Resume</button>
    </a>
      </div>
      <div className="flex- flex-col ">
        <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>
        <div className="flex items-center justify-between flex-wrap gap-4">
        <img src={hsmlogo} alt="srch" className='w-[107px] h-[60px] object-contain' />
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 HSM. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img key={social.name} src={social.url} alt="scl" className="w-[24px] h-[24px] object-contain cursor-pointer bg-blend-color-burn" />
            ))}
          </div>
        </div>
      </div>
    {/* <div className="footer-gradient opacity-60"></div> */}

    </div>
  </motion.footer>
  )
}

export default Footer;