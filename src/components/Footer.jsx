import React from 'react'

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  return (
    <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.padding} py-8 relative z-0`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[44px] text-[24px] text-white">Thank you for your visit here</h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]"
        >
          <span className="font-normal text-[16px] text-white">MY RESUME</span>
        </button>
      </div>
      <div className="flex- flex-col ">
        <div className="mb-[50px] h-[2px] bg-white opacity-10"></div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">HARMAN</h4>
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
    <div className="footer-gradient opacity-60"></div>

    </div>
  </motion.footer>
  )
}

export default Footer;