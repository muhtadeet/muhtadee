import front from "./Photos/DSC_2737456.png";
import back from "./Photos/DSC_0315jejsk.png";
import name from "./Photos/Taron white.png";
import pFront from "./Photos/DSC_2737456fgdhfgh.png"
import { motion, useScroll, useTransform } from "framer-motion";
import FramerMgBtn from "./FramerMgBtn";
import { useRef } from "react";
import Navmenu from "./Navmenu";
import About from "./About";
import Info from "./Info";
import Collage from "./Collage";
import Footer from "./Footer";

const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.8,
      staggerChildren: 0.7,
    },
  },
};

const items = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

// const items2 = {
//   initial: {
//     opacity: 0,
//     x: 100,
//   },
//   animate: {
//     opacity: 1,
//     x: 0,
//   },
// };

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const smx = useTransform(scrollYProgress, [0, 1], [0, -300]);
  return (
    <>
      <Navmenu />
      <div
        id="home"
        className="flex flex-col xl:mt-14 sm:mt-24 md:mt-12 md:mx-5 md:h-screen md:-mb-[32.5rem] xl:h-full justify-center xl:mx-5 xl:-mb-64"
      >
        <div className="flex flex-col gap-5 mt-[50rem] md:-mt-[14rem] ml-3 md:ml-7 sm:mt-0 sm:ml-0 md:justify-center z-40 md:m-1 xl:m-5 xl:justify-center xl:-mt-40 fixed">
          <FramerMgBtn>
            <a
              target="_blank"
              href="https://www.facebook.com/muhtadeee.taaron"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook transition ease-in-out hover:stroke-gray-600 stroke-white"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </a>
          </FramerMgBtn>
          <FramerMgBtn>
            <a
              target="_blank"
              href="https://www.instagram.com/_.muhtadeee._/"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram transition ease-in-out hover:stroke-gray-600 stroke-white"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </a>
          </FramerMgBtn>
        </div>
        {/* <motion.div className="flex justify-center"> */}
        <motion.img
          style={{ y: sm }}
          className="block sm:hidden absolute xl:-left-0 -left-[25.6rem] w-[200vw] mt-[63rem] md:mt-32 md:-left-5 md:w-[100%] xl:mt-40 xl:w-[100%] z-20 drop-shadow-[0_0_7px_rgba(0,0,0,0.55)] pointer-events-none"
          src={pFront}
          alt="photo"
        />
        <motion.img
          style={{ y: sm }}
          className="absolute hidden sm:block xl:-left-0 -left-56 w-[200vw] mt-[55rem] md:mt-32 md:-left-5 md:w-[100%] xl:mt-40 xl:w-[100%] z-20 drop-shadow-[0_0_7px_rgba(0,0,0,0.55)] pointer-events-none"
          src={front}
          alt="photo"
        />
        <img
          className="absolute xl:-left-0 -left-[25.711rem] w-[200%] mt-[23rem] md:-mt-[16rem] md:-left-0 md:w-[100%] xl:-mt-72 xl:w-[100%] drop-shadow-[0_0_7px_rgba(0,0,0,0.55)] pointer-events-none"
          src={back}
          alt="photo"
        />
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="flex flex-col justify-around items-center md:-mt-20 md:w-[20vw] md:h-[90vh] xl:-mt-0 xl:w-[100vw] xl:h-[100vh]"
        >
          <motion.img
            variants={items}
            viewport={{
              once: true,
            }}
            style={{ y: smx }}
            className="absolute w-[70%] ml-6 mt-[36.5rem] md:mt-5 md:w-[40%] md:ml-[46.5rem] xl:ml-0 xl:-mt-28 xl:w-[40%] drop-shadow-[0_0_7px_rgba(0,0,0,0.55)] pointer-events-none"
            src={name}
            alt="photo"
          />
        </motion.div>
        {/* </motion.div> */}
        <div className=" hidden sm:block cursor-pointer z-40 fixed left-[20%] top-[60%] md:left-[45%] md:top-[86%] xl:top-[90%] hover:-ml-3 md:-ml-10 xl:ml-1 transition-all ease-in-out">
          <a
            target="_blank"
            href="mailto: muhtadeetaron@gmail.com"
            rel="noreferrer"
            className="button font-ubuntu no-underline text-black"
          >
            Get in touch
            <div className="icon">
              <span className="span">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M1.05403 31.6175C0.271626 32.3972 0.271626 33.6614 1.05403 34.441C1.83644 35.2207 3.10497 35.2207 3.88737 34.441L1.05403 31.6175ZM35.5599 2.05152C35.5599 0.948871 34.6629 0.0549994 33.5564 0.0549994L15.5251 0.0549994C14.4187 0.0549994 13.5217 0.948871 13.5217 2.05152C13.5217 3.15416 14.4187 4.04804 15.5251 4.04804H31.5529V20.0202C31.5529 21.1228 32.4499 22.0167 33.5564 22.0167C34.6629 22.0167 35.5599 21.1228 35.5599 20.0202L35.5599 2.05152ZM3.88737 34.441L34.9731 3.46327L32.1397 0.639766L1.05403 31.6175L3.88737 34.441Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
      <About />
      <Info/>
      <Collage/>
      <Footer/>
    </>
  );
}
