import React from 'react'
import { technologies } from '../constants'
const Tech = () => {
  return (
    <section className={`relative z-10`}>
    <div className='flex items-center justify-center m-[55px] z-5'>
    <div className='flex flex-wrap justify-center gap-10 w-[950px] mt-11 opacity-80'>
      {technologies.map((technology)=>(
        <div className='flex justify-center items-center w-28 h-28 z-5'>
          <img src={technology.icon} alt={technology.name} />
        </div>
      ))}
    </div>
    </div>
    </section>
  )
}

export default Tech