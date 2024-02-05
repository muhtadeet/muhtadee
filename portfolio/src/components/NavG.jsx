import { motion } from "framer-motion";
import { slide } from "./anim";
// import { Link } from "@nextui-org/react";
// import { animateScroll as scroll } from "react-scroll";
// import FramerMgBtn from './FramerMgBtn.jsx'

function NavG() {
  return (
    <motion.div
      className="relative flex flex-col"
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      
      <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        className="cursor-pointer no-underline md:text-5xl xl:text-8xl md:-mb-2 xl:mb-10 transition ease-in-out duration-300 hover:text-brown-200 hovert-5 flex justify-center pb-5 text-white w-full font-ubuntu font-semibold"
        size="lg"
        // onClick={() => scroll.scrollToTop()}
        href="/home"
        // smooth={true}
        // duration={1000}
      >
        Home
      </motion.a>
      
      <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        className="cursor-pointer no-underline md:text-5xl xl:text-8xl md:-mb-2 xl:mb-10 transition ease-in-out duration-300 hover:text-brown-200 pt-5 xl:-mt-5 flex justify-center pb-5 text-white w-full font-ubuntu font-semibold"
        href="/landscape"
        size="lg"
        smooth={true}
        duration={1000}
      >
        Landscape
      </motion.a>
      
      <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        className="cursor-pointer no-underline md:text-5xl xl:text-8xl md:-mb-2 xl:mb-10 transition ease-in-out duration-300 hover:text-brown-200 pt-5 xl:-mt-5 flex justify-center pb-5 text-white w-full font-ubuntu font-semibold"
        href="/macro"
        size="lg"
        smooth={true}
        duration={1000}
      >
        Macro
      </motion.a>
      
      <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
        className="cursor-pointer no-underline md:text-5xl xl:text-8xl md:-mb-2 xl:mb-10 transition ease-in-out duration-300 hover:text-brown-200 pt-5 xl:-mt-5 flex justify-center pb-5 text-white w-full font-ubuntu font-semibold"
        href="/wildlife"
        size="lg"
        smooth={true}
        duration={1000}
      >
        Wildlife
      </motion.a>
    </motion.div>
  );
}

export default NavG;
