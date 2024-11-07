import { useContext } from "react";
import { Input } from "../Context/InputContext.jsx";
import Introduction from "./Introduction.jsx";
import { motion } from "framer-motion";
export default function Home() {
  const { inputValue } = useContext(Input);
  console.log(inputValue);

  return (
    <div className="h-[95vh]  flex justify-center items-center">
      {inputValue == "" ? (
        <Introduction />
      ) : (
        <motion.div>
          <motion.h1
            initial={{ y: "40px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{duration : 0.5}}
            className="text-3xl"
          >
            The Weather in {inputValue}
          </motion.h1>
          <div>
            <h2>22 <sub>C</sub></h2>
                <h3>Cloudy</h3>
            
          </div>
        </motion.div>
      )}
      <div className="absolute bottom-0 left-0 w-[200px] h-[100px] bg-[#ffb703] blur-[100px] rounded-full scale-[2]"></div>
      <div className="absolute bottom-0 right-[10%] w-[200px] h-[100px] bg-[#3D1DFF] blur-[100px] rounded-full scale-[2]"></div>
    </div>
  );
}
