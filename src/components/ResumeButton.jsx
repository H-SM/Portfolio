import React from "react";
import { CV } from "../assets";
const ResumeButton = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <a href={CV} target="_blank" rel="noopener noreferrer">
        <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  rounded-full px-8 py-3 text-[20px] my-8 transition duration-0 hover:duration-500 ease-linear hover:shadow-lg hover:shadow-cyan-500/50 font-bold">
          Go to My Resume
        </button>
      </a>
    </div>
  );
};

export default ResumeButton;
