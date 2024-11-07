import { AnimatePresence, delay, motion } from "framer-motion";
export default function Introduction() {
  return (
    <div className="">
      <h1 className="text-5xl">
        <AnimatedHeader content={"Good Morning , Mohamed !"} />
      </h1>
      <p className="text-center">Weather at Your Fingertips</p>
    </div>
  );
}
const AnimatedHeader = ({ content }) => {
  console.log(content.split(""));

  return (
    <AnimatePresence>
      <div>
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
      </div>
    </AnimatePresence>
  );
};
