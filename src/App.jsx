import { useContext, useEffect, useState } from "react";
import Header from "./Components/header";
import Home from "./Components/Home";
import { loading } from "./Context/loadingContext";
import { color, motion } from "framer-motion";
import { mouseContext } from "./Context/mouseMoveContext";
const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circOut",
    },
  },
};
function App() {
  const { isLoading } = useContext(loading);
  const {mouseInfo,setMouseInfo} = useContext(mouseContext);
  useEffect(() => {
    const mouseMove = (e) => {
      setMouseInfo({ x: e.clientX, y: e.clientY ,scale : 1,color :'none'});
      console.log(mouseInfo);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  const variants = {
    default : {
      x : setMouseInfo.x - 20,
      y : setMouseInfo.y - 20,
    }
  }
  return (
    <div>
      {isLoading && (
        <div className="fixed left-0 top-0 bg-[#B8B8BF] w-full h-full z-10 flex justify-center items-center">
          <motion.div
            transition={{
              staggerChildren: 0.25,
            }}
            initial="initial"
            animate="animate"
            className="flex gap-1"
          >
            <motion.div
              variants={variants}
              className="h-12 w-2 bg-white"
            ></motion.div>
            <motion.div
              variants={variants}
              className="h-12 w-2 bg-white"
            ></motion.div>
            <motion.div
              variants={variants}
              className="h-12 w-2 bg-white"
            ></motion.div>
            <motion.div
              variants={variants}
              className="h-12 w-2 bg-white"
            ></motion.div>
            <motion.div
              variants={variants}
              className="h-12 w-2 bg-white"
            ></motion.div>
          </motion.div>
        </div>
      )}
      <motion.div 
      animate = {{x : mouseInfo.x , y:mouseInfo.y}}
      transition={{delay : 0}}
      className="h-10 w-10 bg-black rounded-full fixed left-0 top-0 "></motion.div>
      <Header />
      <Home />
    </div>
  );
}

export default App;
