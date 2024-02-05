import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import FramerMgBtn from "./FramerMgBtn";
import Grid from "./Grid";

// const items = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.1,
//     },
//   },
// };

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -800]);
  // const smx = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <>
      <div id="about"></div>
      <motion.div
        ref={container}
        style={{ y: sm }}
        className="foo flex w-screen -left-2 md:-left-2 xl:-left-2 justify-center items-center z-20 relative mt-[18rem] sm:mt-56 xl:-mt-[25rem] h-[110vh] pb-80 mb-10 md:mb-10 md:pt-10 bg-black"
      >
        <Grid />
      </motion.div>
      <motion.div
        ref={container}
        style={{ y: sm }}
        className="foo2 flex justify-center items-center z-20 relative w-screen -left-2 md:-left-2 h-20 -mt-11 bg-black"
      ></motion.div>
    </>
  );
}
