import React from "react";
import { TitleText, TypingText } from "./CustomTexts";
import ResumeButton from "./ResumeButton";
const Resume = () => {
  return (
    <section className="relative z-10 pt-24" id="Resume">
      <div className="mt-[100px]">
        <TypingText
          title="| wanna look further into me?"
          textStyle="text-center"
        />
        <TitleText title={<>Link for my Resume</>} textStyle="text-center" />
        <ResumeButton />
      </div>
    </section>
  );
};

export default Resume;
