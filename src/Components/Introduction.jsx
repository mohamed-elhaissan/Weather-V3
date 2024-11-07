import { AnimatePresence, delay, motion } from "framer-motion";
import underline from '../../public/underline.svg'
export default function Introduction() {
  return (
    <div className="">
      <h1 className="text-6xl">
        <AnimatedHeader content={"Good Morning , Mohamed !"} />
      </h1>
      <motion.p 
        initial ={{opacity : 0}}
        animate = {{opacity : 1}}
        transition={{
            delay : 1
        }}
      className="text-center">Weather at Your Fingertips</motion.p>
    </div>
  );
}
const AnimatedHeader = ({ content }) => {
  console.log(content.split(""));

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
            className="inline-block"
          >
            {item}
          </motion.span>
        ))}
        <motion.img  src={underline} className="absolute right-0 scale-50 left-1/2 -translate-x-1/2 rotate-180"  alt="" />
      </div>
    </AnimatePresence>
  );
};
