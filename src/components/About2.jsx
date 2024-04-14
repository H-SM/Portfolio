import React from 'react'
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants, slideIn } from '../utils/motion';
import { services } from '../constants';
const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="sm:w-[14rem] sm:h-[12rem] xs:w-[12rem] xs:h-[14rem] flex justify-center items-center">
        <div
        className='w-[9rem] h-[10rem] xs:w-[14rem] bg-black/25 hover:bg-black/40 px-[1px] py-4 rounded-[20px] shadow-card transition ease-linear hover:shadow-lg hover:shadow-cyan-500/50 ring-emerald-200/60 ring-2 sm:h-[17rem] xs:h-[14rem]'>
          <div options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='rounded-[20px] py-5 px-12 h-full flex justify-center items-center flex-col'>
            <img src={icon} alt={title} className='xs:w-16 xs:h-16 w-8 h-8 object-contain'/>
            <h3 className='text-white xs:text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </div>
    </Tilt>
  )
}


const About2 = () => (
  <section className={`${styles.padding} relative z-10`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: 'false',amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 justify-center items-center `}>
      <motion.div
      variants={fadeIn('right','tween',0.25,1)}
      className='flex-[0.75] flex justify-center md:items-start items-center flex-col mx-[50px] mb-[3rem]'>
        <TypingText title="| What am I good at?"/>
        <TitleText title={<>My Outline</>}/>
        <motion.p
      variants={fadeIn('up','tween',0.2,1)}
      className='mt-[2rem] font-normal sm:text-[19px] text-[14px] text-justify text-secondary-white mb-8 '>
        Expertise in languages such as 
        <span className='font-bold text-white'> C++, JavaScript, and Typescript,</span> while leveraging technologies like 
        <span className='font-bold text-white'> React and Next.js </span> 
        for comprehensive solutions. The collaborative spirit shines through in notable team-based projects, demonstrating 
        <span className='font-bold text-white'> effective communication and teamwork. </span>
        <br/>
        From dynamic web applications to efficient algorithms, each project reflects an 
        <span className='font-bold text-white'> iterative approach to development. </span>
        </motion.p>
      </motion.div>
      <div
      // variants={slideIn('right','tween',0.2,1)}
      // viewport={{once: 'false',amount: 0.25}}
      className={`flex flex-wrap sm:gap-7 xs:gap-5 gap-4 sm:gap-y-[6.5rem] max-w-[500px] h-full justify-center items-center`}>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ) )}
      </div>
    </motion.div>
  </section>
);

export default About2;