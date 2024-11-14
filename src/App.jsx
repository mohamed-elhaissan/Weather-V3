import { useContext } from "react";
import Header from "./Components/header";
import Home from "./Components/Home";
import { loading } from "./Context/loadingContext";
import {  motion } from "framer-motion";
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

      <Header />
      <Home />
    </div>
  );
}

export default App;
