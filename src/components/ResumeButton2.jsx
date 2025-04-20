import React from "react";
import { CV } from "../assets";
const ResumeButton = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <a href={CV} target="_blank" rel="noopener noreferrer">
        <button className="w-[17.5rem] h-fit flex flex-col bordergradient rounded-[20px] hover:bg-tertiary-background  bg-white/5 justify-center items-center text-[2rem] transition ease-in-out duration-150 z-20 px-4 py-3">
          <div className="w-full flex justify-center items-center text-center cursor-pointer z-20 font-bold text-white text-[20px]">
            Go to My Resume
          </div>
        </button>
      </a>
    </div>
  );
};

export default ResumeButton;
