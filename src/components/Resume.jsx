import React from 'react'
import { TitleText, TypingText } from './CustomTexts';

const Resume = () => {
  return (
    <div className='mt-[100px]'>
    <TypingText title="| wanna look further into me?" textStyle="text-center"/>
    <TitleText title={<>Link for my Resume</>} textStyle="text-center"/>
    <div className='flex justify-center items-center'>
    <div>
    <button className='bg-sky-500 hover:bg-sky-700 rounded-full px-8 py-3 text-[20px] my-8 ' >Go to My Resume</button>
    </div>
    </div>
    </div>
  )
}

export default Resume;