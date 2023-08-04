import React from 'react'
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { TitleText, TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants, slideIn } from '../utils/motion';
import { services } from '../constants';
const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
        variants={fadeIn("right","spring", 0.5* index ,0.75)}
        className='w-full bg-black/25 hover:bg-black/40 p-[1px] rounded-[20px] shadow-card transition ease-linear hover:shadow-lg hover:shadow-cyan-500/50 ring-emerald-200/60 ring-2'>
          <div options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-black/25 hover:bg-black/40 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
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
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <motion.div
      variants={fadeIn('right','tween',0.25,1)}
      className='flex-[0.75] flex justify-center flex-col mx-[50px]'>
        <TypingText title="| What am I good at?"/>
        <TitleText title={<>My Outline</>}/>
        <motion.p
      variants={fadeIn('up','tween',0.2,1)}
      className='mt-[8px] font-normal sm:text-[19px] text-[14px] text-start text-secondary-white max-w-[490px]'>
        Expertise in languages such as 
        <span className='font-bold text-white'> Python, JavaScript, and Typescript,</span> while leveraging technologies like 
        <span className='font-bold text-white'> React and Next.js </span> 
        for comprehensive solutions. The collaborative spirit shines through in notable team-based projects, demonstrating 
        <span className='font-bold text-white'> effective communication and teamwork. </span>
        <br/>
        From dynamic web applications to efficient algorithms, each project reflects an 
        <span className='font-bold text-white'> iterative approach to development. </span>
        </motion.p>
      </motion.div>
      <motion.div
      variants={slideIn('right','tween',0.2,1)}
      viewport={{once: 'false',amount: 0.25}}
      className={`flex flex-wrap gap-10 max-w-[600px]`}>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ) )}
      </motion.div>
    </motion.div>
  </section>
);

export default About2;