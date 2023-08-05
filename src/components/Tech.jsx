import React from 'react'
import { technologies } from '../constants'
const Tech = () => {
  return (
    <div className='flex items-center justify-center m-[55px]'>
    <div className='flex flex-wrap justify-center gap-10 w-[950px] mt-11 opacity-80'>
      {technologies.map((technology)=>(
        <div className='flex justify-center items-center w-28 h-28'>
          <img src={technology.icon} alt={technology.name} />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Tech