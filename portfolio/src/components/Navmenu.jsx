import React, { useState, useEffect, useRef } from "react";
import {
  Navbar
} from "@nextui-org/react";
// import Logo from "./Logo";
// import { Link } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";
import FramerMgBtn from "./FramerMgBtn";
import { AnimatePresence } from "framer-motion";
import Nav from "./Menu.jsx";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function App() {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(burger.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       start: 0,
  //       end: 10,
  //       onLeave: () => {
  //         gsap.to(burger.current, {
  //           scale: 1,
  //           duration: 0.25,
  //           ease: "power1.out",
  //         });
  //       },
  //       onEnterBack: () => {
  //         gsap.to(
  //           burger.current,
  //           { scale: 1, duration: 0.25, ease: "power1.out" },
  //           setIsActive(false)
  //         );
  //       },
  //     },
  //   });
  // }, []);

  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const burger = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [isActive]);

  return (
    <>
    <div className="flex justify-start cursor-pointer"><a href="/home" className="fixed z-40 no-underline transition ease-in-out duration-300 hover:text-white text-white p-10 font-allison text-5xl">Muhtadee Taron</a></div>
    <Navbar
      ref={header}
      className="bg-transparent"
      isBlurred="false"
      maxWidth="2xl"
      position="static"
    >
      {/* <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand> */}
      {/* </NavbarContent>
      <div className="font-ubuntu font-semibold">
        <NavbarContent>
          <NavbarItem>
            <FramerMgBtn>
              <a
                href="/home"
                className="text-white text-lg cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600"
                color="foreground"
              >
                Home
              </a>
            </FramerMgBtn>
          </NavbarItem> */}

          {/* <NavbarItem>
            <FramerMgBtn>
              <a
                className="text-lg cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600"
                color="foreground"
                to="about"
                href="/contact"
              >
                About
              </a>
            </FramerMgBtn>
          </NavbarItem>
          <NavbarItem>
            <FramerMgBtn>
              <Link
                className="text-lg cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600"
                color="foreground"
                to="projects"
                smooth={true}
                duration={1000}
              >
                Projects
              </Link>
            </FramerMgBtn>
          </NavbarItem>
          <NavbarItem>
            <FramerMgBtn>
              <Link
                className="text-lg cursor-pointer transition ease-in-out duration-300 hover:text-light-blue-600"
                color="foreground"
                to="contact"
                smooth={true}
                duration={1000}
              >
                Contact
              </Link>
            </FramerMgBtn>
          </NavbarItem> */}
        {/* </NavbarContent>
        <NavbarContent justify="end"></NavbarContent>
      </div> */}

      <div>
        <div className="pt-16 px-10 md:px-14 md:pb-14 md:pt-7 fixed right-0 z-30">
          <FramerMgBtn>
            <div
              ref={burger}
              onClick={() => {
                setIsMenuActive(!isMenuActive);
              }}
              className="w-[80px] h-[80px] rounded-full transition-all ease-in-out hover:bg-gray-400 bg-white border-2 border-solid z-50 border-[#555555] cursor-pointer flex items-center justify-center"
            >
              <div
                className={`${"burger"} ${isMenuActive ? "burgerActive" : ""}`}
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
