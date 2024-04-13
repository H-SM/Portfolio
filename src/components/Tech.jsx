import React from 'react'
import { technologies } from '../constants'
import Technoicon from './Technoicon'
import { TypingText } from './CustomTexts'

const Tech = () => {
  return (
    <section className={`relative z-10`}>
      <div className='flex flex-col items-center justify-center m-[55px] z-5'>
        <div className='flex flex-wrap justify-center md:gap-10 gap-4 w-full md:w-[950px] mt-11 opacity-80'>
          {technologies.map((technology) => (
            <Technoicon technology={technology}/>
          ))}
        </div>
      </div>
      <TypingText title="↑ Hover on the icons ↑" textStyle="text-center"/>
    </section>
  )
}

export default Tech