import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCounter({ endValue }) {
  const [count, setCount] = useState(0);

  const springCountNumbers = useSpring(0,{
    bounce : 0,duration : 1000,
  })
  springCountNumbers.on('change',(value)=>{
    setTimeout(() => {
        setCount(Math.round(value))
    }, 100);
  })
  useEffect(()=>{
    springCountNumbers.set(endValue)
  },[])
  return (
    <div className="text-4xl flex ">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
        }}
      >
        {count}
      </motion.h2>
      <sub>°C</sub>
    </div>
  );
}
