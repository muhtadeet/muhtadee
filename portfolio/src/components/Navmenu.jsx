import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "@nextui-org/react";
import FramerMgBtn from "./FramerMgBtn";
import { AnimatePresence } from "framer-motion";
import Nav from "./Menu.jsx";

export default function App() {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const burger = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [isActive]);

  return (
    <>
      <div className="flex justify-start cursor-pointer">
        <a
          href="/home"
          className="fixed z-40 no-underline transition ease-in-out duration-300 hover:text-white text-white p-10 font-allison md:text-4xl xl:text-5xl"
        >
          Muhtadee Taron
        </a>
      </div>
      <Navbar
        ref={header}
        className="bg-transparent"
        isBlurred="false"
        maxWidth="2xl"
        position="static"
      >
        <div>
          <div className="pt-16 px-10 md:px-14 md:pb-14 md:pt-0 xl:pt-7 fixed xl:right-0 md:right-0 z-30">
            <FramerMgBtn>
              <div
                ref={burger}
                onClick={() => {
                  setIsMenuActive(!isMenuActive);
                }}
                className="xl:w-[80px] xl:h-[80px] md:w-[60px] md:h-[60px] rounded-full transition-all ease-in-out hover:bg-gray-400 bg-white border-2 border-solid z-50 border-[#555555] cursor-pointer flex items-center justify-center"
              >
                <div
                  className={`${"burger"} ${
                    isMenuActive ? "burgerActive" : ""
                  }`}
                ></div>
              </div>
            </FramerMgBtn>
          </div>
        </div>
        <AnimatePresence mode="wait">{isMenuActive && <Nav />}</AnimatePresence>
      </Navbar>
    </>
  );
}
