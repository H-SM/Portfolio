import React, { useState } from 'react'

const Technoicon = ({ technology }) => {
    const [isHovered, setIsHovered] = useState  (false);

    return (
      <div 
        className='relative flex justify-center items-center w-[5rem] h-[5rem] sm:w-28 sm:h-28'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='w-full h-full cursor-pointer flex justify-center items-center'>
          <div className='absolute z-10 w-full h-full flex justify-center items-center translate-x-0 translate-y-0 opacity-0 cursor-pointer transition ease-in-out duration-300' style={{ opacity: isHovered ? 1 : 0, fontFamily:'Poppins', scale: isHovered ? 1 : 0.9 }}>
            <div className='bg-gray-900 rounded-md px-2 h-fit text-[0.9rem] py-1 font-semibold'>
              {technology.name}
            </div>
          </div>
          <img src={technology.icon} alt={technology.name} className=' transition ease-in-out duration-200 md:max-w-[7rem]' style={{ opacity: isHovered ? 0.4 : 1 }}/>
        </div>
      </div>
    );
  };
  

export default Technoicon
