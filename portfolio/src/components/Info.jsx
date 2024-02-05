import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import Collage from "./Collage";

export default function Info() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const sm2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  return (
    <>
      <motion.div
        ref={container}
        style={{ y: sm }}
        className="flex flex-col bg-[url('./components/Photos/IMG_0194.jpg')] bg-center bg-cover bg-black z-30 -mt-36 -left-2 md:-mt-52 pt-10 w-screen h-[75vh] relative md:-left-2 xl:-left-2 justify-start items-center pointer-events-none"
      >
        <div className=" h-full w-full flex flex-row items-center">
          <div className="overflow-hidden md:h-[50vh] xl:h-[70vh] md:w-[40vw] xl:w-[80vh] rounded-2xl m-10 ml-60 drop-shadow-md">
            <motion.div
              style={{ y: sm2 }}
              className="flex justify-center items-center"
            ></motion.div>
          </div>
        </div>
        <motion.div
          style={{ y: sm }}
          className="foo flex flex-col w-screen justify-center items-center z-40 relative mt-[470px] sm:mt-56 xl:mt-36 mb-10 pt-10 bg-black text-white"
        >
          <p className="text-base w-[21rem] font-ubuntu sm:w-[45rem] -mt-7 py-40">
            With an artist&apos;s eye and a meticulous touch, Taron weaves
            worlds both microscopic and immense. He delves into the hidden
            intricacies of the macro world, coaxing unseen beauty from the
            tiniest details. His lens then zooms outward, capturing the grandeur
            of landscapes, where nature&apos;s brushstrokes paint breathtaking
            vistas. With the patience of a hunter and the heart of a naturalist,
            he waits for the perfect moment to freeze the fleeting grace of
            wildlife. And when night falls, he turns his gaze skyward, his
            camera a vessel to capture the celestial ballet of stars and
            galaxies, transforming the vast unknown into a breathtaking canvas.
            Taron is not just a photographer; he is a storyteller, using light
            and shadow to paint narratives of the world around him, from the
            tiniest whisper to the grandest roar. world, one frame at a time.
          </p>
        </motion.div>
        <motion.div
          ref={container}
          style={{ y: sm }}
          className="absolute z-40 md:left-[30rem] top-[33rem] md:top-[32rem]"
        >
          <motion.div>
            <motion.div className="xl:ml-0 mt-24 sm:mt-0 md:-ml-80 md:mt-32 xl:mt-80 pt-5 font-allison text-5xl md:text-8xl xl:text-9xl flex justify-center items-center rounded-full text-white transition-all ease-in-out duration-300 drop-shadow-xl">
              About Taron
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* <Collage /> */}
    </>
  );
}
