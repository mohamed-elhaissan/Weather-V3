import { AnimatePresence, delay, motion } from "framer-motion";
import { useContext } from "react"
import underline from "../../public/underline.svg";
import { mouseContext } from "../Context/mouseMoveContext.jsx";
export default function Introduction() {
  const { mouseInfo, setMouseInfo } = useContext(mouseContext);
  return (
    <AnimatePresence>
      <motion.div
        className="inline-block"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        // Adjust duration as needed
      >
        <h1 className="text-6xl">
          <motion.AnimatedHeader content={"Good Morning , Mohamed !"} />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
          }}
          className="text-center"
        >
          Weather at Your Fingertips
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
const AnimatedHeader = ({ content }) => {
  return (
    <AnimatePresence>
      <div className="relative">
        {content.split("").map((item, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0, y: "100px" }}
            animate={{ opacity: 1, scale: 1, y: "0px" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.025 * index,

              ease: "easeInOut",
              duration: 0.25,
            }}
            exit={{ y: "-100%", opacity: 0 }}
            className="inline-block"
          >
            {item}
          </motion.span>
        ))}
        <motion.img
          src={underline}
          className="absolute right-0 scale-50 left-1/2 -translate-x-1/2 rotate-180"
          alt=""
        />
      </div>
    </AnimatePresence>
  );
};
