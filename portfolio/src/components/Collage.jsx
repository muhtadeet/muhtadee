import MilkyWay from "./Photos/20210914-DSC_0652cln.png";
import sky from "./Photos/DSC_2166.png";
import spider from "./Photos/DSC_3623.jpg";
import eagle from "./Photos/20211228-DSC_0836.png";
import stars from "./Photos/stock-vector-golden-dust-light-png-bokeh-light-lights-effect-background-christmas-glowing-dust-background-2192855099-removebg-preview.png";
import logo from "./Photos/Taron white.png";
import {
  motion,
  useTransform,
  useScroll,
  easeInOut,
  easeOut,
} from "framer-motion";
import { useRef } from "react";

function Collage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const buttonVariant = {
    view: {
      rotate: -20,
      x: -110,
      y: -20,
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: easeInOut,
      },
    },
    view2: {
      rotate: 17,
      x: 80,
      y: -70,
      transition: {
        delay: 0.3,
        duration: 0.7,
        ease: easeInOut,
      },
    },
    view3: {
      rotate: -8,
      x: -360,
      y: -100,
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: easeInOut,
      },
    },
    view4: {
      rotate: 7,
      x: 60,
      y: -80,
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: easeInOut,
      },
    },
    hover: {
      rotate: -25,
      x: -150,
      y: -30,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: easeOut,
      },
    },
    hover2: {
      rotate: 20,
      x: 100,
      y: -90,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: easeOut,
      },
    },
    hover3: {
      rotate: -17,
      x: -460,
      y: -80,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: easeOut,
      },
    },
    hover4: {
      rotate: 14,
      x: 130,
      y: -110,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  const sm = useTransform(scrollYProgress, [0, 1], [0, -800]);
  //   const sm2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <>
      <motion.div
        ref={container}
        style={{ y: sm }}
        className="bg-black relative flex justify-center items-center z-20 -mt-52 w-screen md:-left-2 h-[100vh] pt-40"
      >
        <motion.div
          style={{ y: sm }}
          className="flex justify-center items-center -mt-[25rem]"
        >
          <motion.div
            variants={buttonVariant}
            whileInView="view"
            viewport={{
              once: true,
            }}
            whileHover="hover"
          >
            <img src={sky} className="absolute z-30 h-72 -ml-32" />
          </motion.div>
          <motion.div
            variants={buttonVariant}
            whileInView="view2"
            viewport={{
              once: true,
            }}
            whileHover="hover2"
          >
            <img src={MilkyWay} className="absolute z-40 w-80 mt-32" />
          </motion.div>
          <motion.div
            variants={buttonVariant}
            whileInView="view3"
            viewport={{
              once: true,
            }}
            whileHover="hover3"
          >
            <img src={spider} className="absolute z-20 w-80 mt-96 -mb-28" />
          </motion.div>
          <motion.div
            variants={buttonVariant}
            whileInView="view4"
            viewport={{
              once: true,
            }}
            whileHover="hover4"
          >
            <img src={eagle} className="absolute h-72 mt-72" />
          </motion.div>
          <motion.div>
            <img
              src={stars}
              className="absolute -z-30 -ml-96 mt-40 star w-[40vw]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          style={{ y: sm }}
          className="text-white font-lato mt-[47rem]"
        >
          <a
            href="/landscape"
            className="no-underline text-white hover:text-gray-400 transition-all duration-500 ease-in-out"
          >
            View More -&gt;
          </a>
        </motion.div>
        <motion.div style={{ y: sm }} className="absolute mt-[86rem]">
          <img src={logo} className="w-72" />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Collage;
