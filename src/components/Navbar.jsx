import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants2 } from "../utils/motion";
import { menu, hsmlogo, close } from "../assets";
import { navLinks } from "../constants";
import "../index.css";

const Navbar = () => {
  const [opener, setOpener] = useState(true);

  const handleClick = () => {
    icons.forEach((icon) => {
      icon.classList.toggle("open");
    });
    setOpener(!opener);
  };
  const icons = document.querySelectorAll(".icon");

  useEffect(() => {
    handleClick();
  }, []); 

  return (
    <section className="relative z-10 pt-6">
      <motion.nav
        variants={navVariants2}
        initial="hidden"
        whileInView="show"
        className={`${styles.paddingX}  h-[10rem]`}
        id="nav"
      >
        <div
          className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
        >
          <button
            className="w-[71px] h-[40px] object-contain z-20"
            onClick={() => (window.location.href = "/")}
          >
            <img
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              src={hsmlogo}
              alt="srch"
              className="w-full h-full"
            />
          </button>

          <h2 className="hidden md:flex font-extrabold text-[24px] leading-[30px] text-white z-20">
            HARMAN SINGH MALHOTRA
          </h2>

          <div className="relative transition ease-in-out duration-150 z-20">
            <button
              className="w-[13rem] h-fit flex flex-col bordergradient rounded-[20px] bg-secondary-background py-2 px-4 justify-center items-center text-[2rem] transition ease-in-out duration-150 z-20"
              onClick={handleClick}
            >
              <div className="w-full flex justify-between items-center cursor-pointer z-20 ">
                <p className="font-bold text-white text-[0.8rem]">
                  THISISHARMAN.COM
                </p>
                {/* <img
                  src={!opener ? menu : close}
                  alt="menu"
                  className="w-[1rem] object-contain z-3"
                /> */}
                <div
                  class="icon nav-icon-1 w-4 h-4"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </button>
            <div
              className={`${
                opener ? "opacity-100" : "opacity-0 hidden"
              } w-[10rem] h-fit top-[0.4rem]  flex flex-col bordergradient rounded-[20px] sm:bg-secondary-background bg-gray-900/30 justify-center  items-center text-[2rem] transition ease-in-out duration-150 z-40 overflow-hidden `}
              id="menu"
              onClick={handleClick}
            >
              <a
                href="#Overview"
                className="font-bold text-white text-[1rem] w-full h-[1.5rem] flex items-center justify-center transition ease-in-out duration-200 py-[1rem] hover:bg-white/5 z-30"
                role="menuitem"
                id="menu-item-0"
              >
                Overview
              </a>
              <a
                href="#Experience"
                className="font-bold text-white text-[1rem] w-full h-[1.5rem] flex items-center justify-center transition ease-in-out duration-200 py-[1rem] hover:bg-white/5 z-30"
                role="menuitem"
                id="menu-item-1"
              >
                Experience
              </a>
              <a
                href="#Projects"
                className="font-bold text-white text-[1rem] w-full h-[1.5rem] flex items-center justify-center transition ease-in-out duration-200 py-[1rem] hover:bg-white/5 z-30"
                role="menuitem"
                id="menu-item-2"
              >
                Projects
              </a>
              <a
                href="#Resume"
                className="font-bold text-white text-[1rem] w-full h-[1.5rem] flex items-center justify-center transition ease-in-out duration-200 py-[1rem] hover:bg-white/5 z-30"
                role="menuitem"
                id="menu-item-3"
              >
                Resume
              </a>
              <a
                href="#Contact"
                className="font-bold text-white text-[1rem] w-full h-[1.5rem] flex items-center justify-center transition ease-in-out duration-200 py-[1rem] hover:bg-white/5 z-30"
                role="menuitem z-30"
                id="menu-item-4"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    </section>
  );
};

export default Navbar;
