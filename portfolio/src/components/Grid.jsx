import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Example = () => {
  return (
    <div className="grid w-full place-content-center bg-gradient-to-br from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard />
    </div>
  );
};

const items = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0,
    },
  },
};
const items2 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
    },
  },
};
const items3 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <>
      <div className="flex flow-row">
        <a href="/landscape">
          <motion.div
            variants={items}
            initial="initial"
            whileInView="animate"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-80 rounded-xl"
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute bg-cover bg-center bg-[url('./components/Photos/DSC_2437.jpg')] inset-4 grid place-content-center rounded-xl bg-black shadow-lg"
            >
              <p
                style={{
                  transform: "translateZ(50px)",
                }}
                className="text-center flex justify-center items-center text-4xl text-white transition-all ease-in-out hover:bg-black/40 bg-black/20 h-96 w-80 font-lato font-bold"
              >
                Landscape
              </p>
            </div>
          </motion.div>
        </a>
        <a href="/macro">
          <motion.div
            variants={items2}
            initial="initial"
            whileInView="animate"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-80 rounded-xl mx-40"
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute bg-cover bg-center bg-[url('./components/Photos/DSC_3799.jpg')] inset-4 grid place-content-center rounded-xl bg-black shadow-lg"
            >
              <p
                style={{
                  transform: "translateZ(50px)",
                }}
                className="text-center flex justify-center items-center text-4xl text-white transition-all ease-in-out hover:bg-black/40 bg-black/20 h-96 w-80 font-lato font-bold"
              >
                Macro
              </p>
            </div>
          </motion.div>
        </a>
        <a href="/wildlife">
          <motion.div
            variants={items3}
            initial="initial"
            whileInView="animate"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
            className="relative h-96 w-80 rounded-xl"
            whileHover={{
              scale: 1.1,
              transition: { duration: 1 },
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
              className="absolute bg-cover bg-center bg-[url('./components/Photos/DSC_1069.jpg')] inset-4 grid place-content-center rounded-xl bg-black shadow-lg"
            >
              <p
                style={{
                  transform: "translateZ(50px)",
                }}
                className="text-center flex justify-center items-center text-4xl text-white transition-all ease-in-out hover:bg-black/40 bg-black/20 h-96 w-80 font-lato font-bold"
              >
                Wildlife
              </p>
            </div>
          </motion.div>
        </a>
      </div>
    </>
  );
};

export default Example;
